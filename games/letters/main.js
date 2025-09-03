/* 
i pledge that i have neither given nor recieved prohibited aid on this assessment
emma trzupek
01/15/23

note:
saving the game is in rough dev right now
if theres a letter on the ground the game will force you to pick it up before you are able to move again
^ that is because i will put an animation there, and it will be like a mini-game

wasd to move
pressing g will bring up sample game dialogue
pressing c will bring up sample char dialogue
clicking dialogue box will skip typewriter anim
pressing e will give a save code (in dev)
pressing a or d enough will trigger an event where the game "yells" at you for going off the path

frames around scenes (css) were left to show differences in generation
console will also print scenes generated
*/


let body = document.querySelector("body");
//how far you've scrolled down
let currentTop = 0;
//how fast you scroll
let scrollPower = 13;
var docHeight = Math.max( body.scrollHeight, body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
windowHeight = window.innerHeight;
//which way you're facing
let charDir = "f";
let characterImage = document.getElementById("character");
characterImage.moving = false;
let character = "0";
let footsteps = false;
//how many scenes are generated
let tripLength = 8;
let currentScenes = [];

//stats
let statsDiv = document.getElementsByClassName("stats")[0];
let tripsText = document.getElementById("tripStats");
let lettersText = document.getElementById("letterStats");
let flowersText = document.getElementById("flowerStats");
let trips = 0;
let letters = 0;
let flowers = 0;

//for saving/loading the game
let savedScenes = [];
let savedRun = false;
let saveDiv = document.getElementById("savecontainer");

//chops up the save code, sets all of the variables accordingly
window.onload = function () {
    var url = document.location.href;
    var encrypted = url.split("?")[1];
    var secret = decrypt(encrypted);

    //character
    character = secret.substring(0, 1);
    characterImage.src = "character/char_anim_"+character+charDir+"2.png";
    
    //footsteps
    if(secret.substring(1, 2) == 1) footsteps = true;
    //tripLength
    tripLength = secret.substring(2, 3);
    console.log(tripLength);
    if(tripLength == 0) {
        tripLength = 8;
    } else if(tripLength == 1) {
        tripLength = 14;
    } else if(tripLength == 2) {
        tripLength = 25;
    }

    

    //trip
    trips = parseInt(secret.substring(3, 6));
    if(trips % 2 == 0) moveGUI();

    //letters
    letters = parseInt(secret.substring(6, 9));

    //flowers
    flowers = parseInt(secret.substring(9, 12));
    
    currentTop = parseInt(secret.substring(12, 17));

    //scenecode
    let testingForSave = 0;
    let scenecode = secret.substring(17);
    for(let i = 0; i < scenecode.length; i++) {
        if(scenecode.charAt(i) != "5") {
            savedScenes.push(parseInt(scenecode.charAt(i)));
            if(scenecode.charAt(i) == "0") {
                testingForSave++;
            }
        }
    }
    if(testingForSave != savedScenes.length) savedRun = true;
    update();
}


let canMove = true;

//for spooky thing that happens if you keep trying to go off the path
let strayed = 0;
let spooked = 0;

//adds a space to dialogue
let escCode = "@"
let dialogueDiv = document.getElementsByClassName("charDialogueBG")[0];
let dialogueText = dialogueDiv.getElementsByClassName("charDialogue")[0];
let gameDialogueDiv = document.getElementsByClassName("gameDialogueBG")[0];
let gameDialogueText = gameDialogueDiv.getElementsByClassName("gameDialogue")[0];
let dialogueOver = false;
let typewriterIndex = 0;
let typewriterPunctIndex = 0;
let typewriterStopped = false;
let currentDialogue = "";

var checkpointDialogue = ["i don't need to sleep!",
                        "some light is nice. although, it is day right now...",
                        "it looks comfortable, but i don't want to sit.",
                        "tick, tock, tick, tock",
                        "a map? hah! like i'd need one of those. heh. heh...",
                        "some empty shelves? interesting. i would care more if it was filled with letters. or flowers.",
                        "an empty sign, how fun.",
                        "what's a single tree doing here?"];
let allCheckpointDialogue = 0;

// play-on-words taken from haunted mansion ride at walt disney world
var graveyardDialogue = ["'1987'", 
                        "'1964'", 
                        "'1899'", 
                        "'2023'", 
                        "'2005'", 
                        "'1992'", 
                        "'1945'", 
                        "'Mary Jane'", 
                        "'I. Emma Spook'", 
                        "'Wee. G. Board'",
                        "'Paul Tergyst'",
                        "'Bea Witch'",
                        "'Manny Festation'"];
let allGraveyardDialogue = 0;

//for the letter animation that will be added soon
let letterScenes = [];
let letterScenesImgs = [];
let playingLetterAnim = false;

//scene variables
let sceneDiv = document.getElementById("scenes");
let tempScenes = document.getElementsByClassName("tempScenes");
let generatedScenes = [];
let topScene = document.getElementById("topend");
let bottomScene = document.getElementById("bottomend");

//dialogue variables
gameDialogueDiv.onclick = () => {
    if(dialogueOver) {
        clearDialogue();
    } else {
        skipDialogue("game");
    }
}
dialogueDiv.onclick = () => {
    if(dialogueOver) {
        clearDialogue();
    } else {
        skipDialogue("char");
    }
}

//disables scrolling
function stopScroll() {
    window.scrollTo(scrollLeft, scrollTop);
}
disableScroll();
window.removeEventListener("scroll", stopScroll());
function disableScroll() {
    body.style.overflow = "hidden";
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    window.onscroll = stopScroll();
}

//animation for character
function charAnim(elem) {
    elem.moving = true;
    let index = 0;
    let id = setInterval(frame, 150);
    function frame() {
        if (index == 3) {
            clearInterval(id);
            elem.src = "character/char_anim_"+character+charDir+"2.png";
            elem.moving = false;
        } else {
            index++;
            if(index == 1 && footsteps) {
                var audio = new Audio('footleft.mp3');
                audio.play();
            } else if(index == 3 && footsteps) {
                var audio = new Audio('footright.mp3');
                audio.play();
            }
            elem.src = "character/char_anim_"+character+charDir+index+".png";
        }
    }
}


/*
  u
l   r
  d
-----
ul   ur
  x  
dl   dr
*/

//in dev
function letterAnim(elem, scene) {
    playingLetterAnim = true;
    let id = setInterval(frame, 100);
    let directions = ["u", "l", "r", "d", "ul", "ur", "dl", "dr"];
    let randomMovementAmount = Math.floor(Math.random() * (200 - 10) + 10);
    let randomDirection = Math.floor(Math.random() * 8);
    let tempCount = 0;
    function frame() {
        let randSpeed = Math.floor(Math.random() * (20 - 10) + 10);
        if (!isVisible(elem) || canMove) {
            clearInterval(id);
            if(!canMove) {
                scene.removeChild(elem);
            }
            playingLetterAnim = false;
            canMove = true;
        } else if(randomMovementAmount == 0) {
            //reset direction and movement
            randomMovementAmount = Math.floor(Math.random() * (20 - 10) + 10);
            randomDirection = Math.floor(Math.random() * 8);
        } else {

            //fix this T-T
            // if(directions[randomDirection].includes("u")) {
            //     elem.style.setProperty("transform", `translateY(-${randSpeed * 10}px)`);
            // } else if(directions[randomDirection].includes("d")) {
            //     elem.style.setProperty("transform", `translateY(${randSpeed * 10}px)`);
            // }
            // if(directions[randomDirection].includes("l")) {
            //     elem.style.setProperty("transform", `translateX(-${randSpeed * 10}px)`);
            // } else if (directions[randomDirection].includes("r")) {
            //     elem.style.setProperty("transform", `translateX(${randSpeed * 10}"px)`);
            // }
            randomMovementAmount--;
            tempCount++;
        }
    }
}

//test anim for a particle that would float around, not used but code might be helpful later
// let particleImage = document.getElementById("particle");
// particleImage.moving = false;
// function partAnim(elem) {
//     elem.moving = true;
//     let index = 0;
//     let translate = 1;
//     let id = setInterval(frame, 100);
//     function frame() {
//         if (index == 8) {
//             clearInterval(id);
//             elem.src = "";
//             elem.moving = false;
//         } else if (index == 4) {
//             index = 1;
//             translate++;
//             elem.style.setProperty("transform", "translateX("+100*translate+"px)");
//             elem.src = "particle/particle"+index+".png";
//         } else {
//             index++;
//             elem.src = "particle/particle"+index+".png";
//         }
//     }
// }

//dialogue
function displayGameDialogue(text) {
    currentDialogue = text;
    canMove = false;
    gameDialogueDiv.style.display = "block";
    gameDialogueText.style.display = "block";
    typewriterText(gameDialogueText, text);
}

function displayCharDialogue(text) {
    currentDialogue = text;
    canMove = false;
    dialogueDiv.style.display = "block";
    dialogueText.style.display = "block";
    typewriterText(dialogueText, text);

}
//typewriter animation
function typewriterText(textElem, text) {
    typewriterIndex = 0;
    typewriterPunctIndex = 0;
    let id = setInterval(frame, 50);
    function frame() {
        if(typewriterStopped) {
            typewriterIndex = text.length;
            typewriterStopped = false;
        }
        if(typewriterIndex < text.length && !typewriterStopped) {
            if((text.charAt(typewriterIndex) == "." || text.charAt(typewriterIndex) == "!" || text.charAt(typewriterIndex) == "?") || typewriterPunctIndex != 0) {

                if(typewriterPunctIndex == 0) {
                    textElem.textContent += text.charAt(typewriterIndex);
                    typewriterIndex++;
                }
                typewriterPunctIndex++;
                if(typewriterPunctIndex > 10){
                    typewriterPunctIndex = 0;
                }
            } else {
                if(text.charAt(typewriterIndex) == escCode) {
                    textElem.textContent += "\r\n";
                    typewriterIndex++;
                } else {
                    textElem.textContent += text.charAt(typewriterIndex);
                    typewriterIndex++;
                }
            }
        } else {
            clearInterval(id);
            dialogueOver = true;
            typewriterIndex = 0;
            typewriterPunctIndex = 0;
            currentDialogue = "";
        }
    }
}

function skipDialogue(type) {
    typewriterStopped = true;
    if(type == "game") {
        gameDialogueText.innerHTML = currentDialogue;
    } else if(type == "char") {
        dialogueText.innerHTML = currentDialogue;
    }
    dialogueOver = true;
    currentDialogue = "";
}

function clearDialogue() {
    dialogueDiv.style.display = "none";
    dialogueText.style.display = "none";
    dialogueText.innerHTML = "";
    gameDialogueDiv.style.display = "none";
    gameDialogueText.style.display = "none";
    gameDialogueText.innerHTML = "";
    dialogueOver = false;
    canMove = true;
}

//hotkeys
document.addEventListener("keydown", function(event) {
    //dont update current top if at top of screen
    if(document.documentElement.scrollTop == 0) {
        currentTop = 0;
    } else if(event.key == "w" && canMove) {
        charDir = "b";
        if(!characterImage.moving){
            charAnim(characterImage);
        }
        currentTop -= scrollPower;
        window.scrollTo(0, currentTop);
    }
    //don't move if at bottom of screen
    if((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    } else if(event.key == "s"&& canMove) {
        charDir = "f";
        if(!characterImage.moving){
            charAnim(characterImage);
        }
        currentTop += scrollPower;
        window.scrollTo(0, currentTop);
    }
    //can't move left or right, just for show
    if(event.key == "a"&& canMove){
        strayed++;
        charDir = "l";
        if(!characterImage.moving){
            charAnim(characterImage);
        }
    }
    if(event.key == "d" && canMove){
        strayed++;
        charDir = "r";
        if(!characterImage.moving){
            charAnim(characterImage);
        }
    }
    //for saving, in dev
    if(event.key == "e") {
        if(canMove) {
            canMove = false;
            let saveCode = "";
            saveCode += character.toString();
            if(tripLength == 8) {
                saveCode += "0";
            } else if(tripLength == 14) {
                saveCode += "1";
            } else if(tripLength == 25) {
                saveCode += "2";
            }
            if(footsteps) {
                saveCode += "1";
            } else {
                saveCode += "0";
            }

            let tripString = trips.toString();
            while(tripString.length < 3) {
                tripString = "0" + tripString;
            }
            saveCode += tripString;

            let letterString = letters.toString()
            while(letterString.length < 3) {
                letterString = "0" + letterString;
            }
            saveCode += letterString.toString();

            let flowerString = flowers.toString();
            while(flowerString.length < 3) {
                flowerString = "0" + flowerString;
            }
            saveCode += flowerString;

            let topString = currentTop.toString();
            while(topString.length < 5) {
                topString = "0" + topString;
            }
            saveCode += topString;

            let scenesToSave = currentScenes;
            while(scenesToSave.length != 25) {
                scenesToSave.push(5);
            }
            let scenesToSaveString = scenesToSave.toString();
            while(scenesToSaveString.length != 25) {
                scenesToSaveString = scenesToSaveString.replace(",", "");
            }
            saveCode += scenesToSaveString;
            let encrypted = encrypt(saveCode);
            saveDiv.style.display = "block";
            saveDiv.innerHTML = "save code: " + encrypted;
        } else {
            saveDiv.style.display = "none";
            canMove = true;
        }
    }
    //to test character dialogue
    if(event.key == "c") {
        displayCharDialogue("this is some sample character dialogue. theres a pause after punctuation, which is fancy.");
    }
    //to test game dialogue
    if(event.key == "g") {
        displayGameDialogue("this is some sample game dialogue. it's really cool!");
    }
    update();
});

//basically the game yells at you for trying to go left or right so many times
function playSpooky() {
    let i = 0;
    let id = setInterval(frame, 1000);
    let waits = [0,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,3];
    function frame() {
        if (i == waits.length) {
            clearInterval(id);
        } else if(waits[i] == 1) {
            characterImage.src = "character/char_anim_"+character+"f2.png";
        } else if(waits[i] == 2) {
            var spooky = new Audio('spooky'+spooked+'.wav');
            spooky.play();
        } else if(waits[i] == 3) {
            body.style.backgroundImage = "url('bgtoblack/frame"+spooked+".jpg')";
            canMove = true;
        }
        i++;
    }
}


function update(){
    tripsText.innerHTML = "trip: " + trips;
    lettersText.innerHTML = "letters: " + letters;
    flowersText.innerHTML = "flowers: " + flowers;
    if(strayed > 999 && spooked < 3){
        strayed = 0;
        if(canMove) spooked++;
        canMove = false;
        body.style.backgroundImage = "url('bgtoblack.gif')";
        playSpooky();
    } else if (strayed > 999 && spooked == 3) {
        badEnding();
    }

    if(allCheckpointDialogue == checkpointDialogue.length) {
        displayGameDialogue("achievement get! found all items");
        // achievement get, found all checkpoint dialogue
    }
    if(allGraveyardDialogue == graveyardDialogue.length) {
        displayGameDialogue("achievement get! found all graves");
        // achievement get, found all graveyard dialogue
    }
    //letter anims, in dev
    for(let i = 0; i < letterScenes.length; i++) {
        if(isVisible(letterScenes[i]) && !playingLetterAnim && !letterScenes[i].letterGone) {
            canMove = false;
            letterAnim(letterScenesImgs[i], letterScenes[i]);
        }
    }
    //makes a new trip, generates new random scenes
    if(trips == 0) {
        newTrip();
    } else if(trips % 2 == 1 && isVisible(bottomScene)) {
        newTrip();
    } else if(trips % 2 == 0 && isVisible(topScene)) {
        newTrip();
    } 
}

//checks if the scene is visible
function isVisible(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= -50 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + 50
    );
}

//something better will go here once i get the endings fleshed out
function badEnding() {
    body.style.backgroundImage = "url('bgtoblack/frame10.jpg')";
}

//new trip
function newTrip() {
    trips++;
    moveGUI();
    genScenes();
    update();
}

//moves the gui to opposite end of screen, when new trip begins
function moveGUI() {
    //move character dialogue
    //move game dialogue
    //move character

    //odd trip, going "down"
    //even trip, going "up"
    if(trips % 2 == 0) {
        console.log("even, up");
        dialogueDiv.style.setProperty("bottom", "110px");
        dialogueDiv.style.setProperty("top", "initial");
        gameDialogueDiv.style.setProperty("bottom", "initial");
        gameDialogueDiv.style.setProperty("top", "50px");
        characterImage.style.setProperty("bottom", "50px");
        characterImage.style.setProperty("top", "initial");
    } else {
        console.log("odd, down");
        dialogueDiv.style.setProperty("top", "50px");
        dialogueDiv.style.setProperty("bottom", "initial");
        gameDialogueDiv.style.setProperty("top", "initial");
        gameDialogueDiv.style.setProperty("bottom", "50px");
        characterImage.style.setProperty("top", "50px");
        characterImage.style.setProperty("bottom", "initial");
    }
}

//generates random scenes to be displayed, so every trip isn't the same
function genScenes() {
    //empty 0
    //letters 1
    //flowers 2
    //graveyard 3
    //checkpoint 4
    let sceneIds = Array(0);
    for(let i = 0; i < tripLength; i++) sceneIds.push(0);
    let avaliableIndexes = Array(0);
    for(let i = 1; i < tripLength - 1; i++) avaliableIndexes.push(i);
    var randCheckpoint = Math.floor(Math.random() * avaliableIndexes.length);
    if(avaliableIndexes.includes(randCheckpoint)) {
        sceneIds.splice(randCheckpoint, 1, 4);
        avaliableIndexes.splice(avaliableIndexes.indexOf(randCheckpoint), 1);
    }
    var numGraveyards = Math.floor(Math.random() * 2);
    for(let i = 0; i < numGraveyards; i++) {
        var randGraveyard = Math.floor(Math.random() * tripLength);
        if(avaliableIndexes.includes(randGraveyard)) {
            sceneIds.splice(randGraveyard, 1, 3);
            avaliableIndexes.splice(avaliableIndexes.indexOf(randGraveyard), 1);
        } else {
            i--;
        }
    }
    let numFlowersAndLetters = Math.floor(tripLength / 2) - (numGraveyards + 1);
    let numFlowers = Math.floor(numFlowersAndLetters / 2) + 1;
    let numLetters = numFlowersAndLetters - numFlowers;

    for(let i = 0; i < numFlowers; i++) {
        var randFlowers = Math.floor(Math.random() * tripLength);
        if(avaliableIndexes.includes(randFlowers)) {
            sceneIds.splice(randFlowers, 1, 2);
            avaliableIndexes.splice(avaliableIndexes.indexOf(randFlowers), 1);
        } else {
            i--;
        }
    }
    for(let i = 0; i < numLetters; i++) {
        var randLetters = Math.floor(Math.random() * tripLength);
        if(avaliableIndexes.includes(randLetters)) {
            sceneIds.splice(randLetters, 1, 1);
            avaliableIndexes.splice(avaliableIndexes.indexOf(randLetters), 1);
        } else {
            i--;
        }
    }
    if(savedRun) {
        sceneIds = savedScenes;
        savedRun = false;
    }
    console.log(sceneIds);
    clearScenes();
    for(let i = 0; i < sceneIds.length; i++) {
        newScene(sceneIds[i]);
    }
    currentScenes = sceneIds;
    
}

//actually creates the new scene and adds it to the html
function newScene(sceneId) {
    let scene = tempScenes[sceneId].cloneNode(true);
    scene.classList.remove("tempScenes");
    if(sceneId == 1) {
        let randInt = Math.floor(Math.random() * 3);
        let img = document.createElement("img");
        img.classList.add("letterImg");
        let imageSrc = "letterImgs/letter" + randInt + ".png";
        img.setAttribute("src", imageSrc);

        img.moveSpeed = Math.floor(Math.random() * (20 - 1) + 1);

        scene.appendChild(img);
        scene.yheight = window.innerHeight * (generatedScenes.length + 1);
        letterScenesImgs.push(img);
        letterScenes.push(scene);
        img.onclick = function() {
            letters++;
            scene.removeChild(img);
            canMove = true;
            scene.letterGone = true;
            update();
        }
        scene.letterGone = false;
    } else if(sceneId == 2) {
        let numFlowers = Math.floor(Math.random() * (6 - 1) + 1);
        for(let i = 0; i < numFlowers; i++) {
            let randInt = Math.floor(Math.random() * 10);
            let img = document.createElement("img");
            img.classList.add("flowerImg");
            let imageSrc = "flowerImgs/flower" + randInt + ".png";
            img.setAttribute("src", imageSrc);
            let randHeight = Math.floor(Math.random() * 97);
            let randWidth = 0;
            let goodWidth = false;
            while(!goodWidth) {
                randWidth = Math.floor(Math.random() * 97);
                if(randWidth < 55 && randWidth > 45) {
                    goodWidth = false;
                } else {
                    goodWidth = true;
                }
            }
            img.style.marginLeft = randWidth + "vw";
            img.style.marginTop = randHeight + "vh";
            img.onclick = function() {
                flowers++;
                scene.removeChild(img);
                update();
            }
            scene.appendChild(img);
        }
    } else if(sceneId == 3) {
        let numGraves = Math.floor(Math.random() * (6 - 2) + 2);
        for(let i = 0; i < numGraves; i++) {
            let randInt = Math.floor(Math.random() * 15);
            let img = document.createElement("img");
            img.classList.add("graveImg");
            let imageSrc = "graveImgs/grave" + randInt + ".png";
            img.setAttribute("src", imageSrc);
            let randHeight = Math.floor(Math.random() * 97);
            let randWidth = 0;
            let goodWidth = false;
            while(!goodWidth) {
                randWidth = Math.floor(Math.random() * 97);
                if(randWidth < 55 && randWidth > 45) {
                    goodWidth = false;
                } else {
                    goodWidth = true;
                }
            }
            img.style.marginLeft = randWidth + "vw";
            img.style.marginTop = randHeight + "vh";
            let randDialogue = Math.floor(Math.random() * graveyardDialogue.length);
            //add game dialogue for grave readings
            img.onclick = function() {
                if(graveyardDialogue[randDialogue].slice(-1) == "." && canMove) {
                    displayGameDialogue(graveyardDialogue[randDialogue] + ".. haven't I seen this one before?");
                } else if(canMove) {
                    displayGameDialogue(graveyardDialogue[randDialogue]);
                    graveyardDialogue[randDialogue] += ".";
                    allGraveyardDialogue++;
                }
            }
            scene.appendChild(img);
        }
    } else if(sceneId == 4) {
        let randInt = Math.floor(Math.random() * 8);
        let img = document.createElement("img");
        img.classList.add("checkpointImg");
        let imageSrc = "checkpointImgs/" + randInt + ".png";
        img.setAttribute("src", imageSrc);
        img.onclick = function() {
            if(checkpointDialogue[randInt] == "." && canMove){
                displayCharDialogue("this, again? ugh.");
            } else if(canMove) {
                displayCharDialogue(checkpointDialogue[randInt]);
                checkpointDialogue[randInt] = ".";
                allCheckpointDialogue++;
            }

        };
        scene.appendChild(img);
    }
    generatedScenes.push(scene);
    sceneDiv.appendChild(scene);
}

function clearScenes() {
    while(generatedScenes.length > 0) {
        generatedScenes.pop().remove();
    }
    while(letterScenes.length > 0) {
        letterScenes.pop().remove();
    }
    while(letterScenesImgs.length > 0) {
        letterScenesImgs.pop().remove();
    }
}

//encryption and decryption for the save key (in dev)
function encrypt(string) {
    let ints = [];
    ints[0] = string.substring(0, 3);
    ints[1] = string.substring(3, 6);
    ints[2] = string.substring(6, 9);
    ints[3] = string.substring(9, 12);
    ints[4] = string.substring(12, 17);
    ints[5] = string.substring(17, 22);
    ints[6] = string.substring(22, 27);
    ints[7] = string.substring(27, 32);
    ints[8] = string.substring(32, 37);
    ints[9] = string.substring(37);
    for(let i = 0; i < ints.length; i++) {
        if(i < 4) {
          ints[i] = ints[i] * 747;
          ints[i] = ints[i] % 1000;
          while(ints[i].toString().length < 3) {
            ints[i] = "0" + ints[i];
          }
        } else {
          ints[i] = ints[i] * 747;
          ints[i] = ints[i] % 100000;
          while(ints[i].toString().length < 5) {
            ints[i] = "0" + ints[i];
          }
        }
    } 
    let encrypted = ints.toString();
    while(encrypted.length != 42) {
      encrypted = encrypted.replace(",", "");
    }
    return encrypted;
}

function decrypt(string) {
    let ints = [];
    ints[0] = string.substring(0, 3);
    ints[1] = string.substring(3, 6);
    ints[2] = string.substring(6, 9);
    ints[3] = string.substring(9, 12);
    ints[4] = string.substring(12, 17);
    ints[5] = string.substring(17, 22);
    ints[6] = string.substring(22, 27);
    ints[7] = string.substring(27, 32);
    ints[8] = string.substring(32, 37);
    ints[9] = string.substring(37);
    for(let i = 0; i < ints.length; i++) {
        if(i < 4) {
            ints[i] = ints[i] * 83;
            ints[i] = ints[i] % 1000;
            while(ints[i].toString().length < 3) {
                ints[i] = "0" + ints[i];
            }
        } else {
            ints[i] = ints[i] * 54083;
            ints[i] = ints[i] % 100000;
            while(ints[i].toString().length < 5) {
                ints[i] = "0" + ints[i];
            }
        }
    }  
    let decrypted = ints.toString();
    while(decrypted.length != 42) {
      decrypted = decrypted.replace(",", "");
    }
    codeValid = true;
    return decrypted;
}



// to do :)
// add letter image animation
// add end, start animations (character)
// randomly gen opposite end houses/towns to "deliver" the letters to
// finish deving save state
// fix weird issue with end triggers and save
// add ways for the game to end


