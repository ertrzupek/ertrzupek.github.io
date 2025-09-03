let buttons = document.querySelectorAll("button");
let characters = document.querySelectorAll("img");
for(let i = 0; i < characters.length; i++) {
    let character = characters[i];
    character.moving = false;
    character.i = i;
}
let characterOver = null;
let footsteps = false;
let length = 0;

for(let i = 0; i < 3; i++) {
    let button = buttons[i];
    button.onmouseenter = () => {
        characterOver = i;
    }
    button.onmouseleave = () => {
        characterOver = null;
    }
    button.onclick = () => {
        let footstepsInt = 0;
        if(footsteps) {
            footstepsInt = 1;
        }
        console.log(length);
        let decryptedURL = (i+1) + "" + footstepsInt + "" + length + "000000000000000000000000000000000000000";
        console.log(decryptedURL);
        window.location.href = "game.html?" + encrypt(decryptedURL);
    }
}

//settings
let buttonFoot = buttons[3];
buttonFoot.onclick = () => {
    if(buttonFoot.textContent == "true") {
        footsteps = false;
    } else {
        footsteps = true;
    }
    buttonFoot.textContent = footsteps;
}

let buttonLength = buttons[4];
buttonLength.onclick = () => {
    if(buttonLength.textContent == "short") {
        length = 1;
        buttonLength.textContent = "medium";
    } else if(buttonLength.textContent == "medium") {
        length = 2;
        buttonLength.textContent = "long";
    } else if(buttonLength.textContent == "long") {
        length = 0;
        buttonLength.textContent = "short";
    }
}

//character animation
function charAnim(elem) {
    elem.moving = true;
    let index = 0;
    let id = setInterval(frame, 150);
    function frame() {
        let char = elem.i + 1;
        if (index == 3) {
            clearInterval(id);
            elem.src = "character/char_anim_"+char+"f2.png"
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
            elem.src = "character/char_anim_"+char+"f"+index+".png"
        }
    }
}
function checkToPlay() {
    if(characterOver != null) {
        let button = buttons[characterOver];
        let character = characters[characterOver];
        if(!character.moving){
            charAnim(character);
        }
    }
}

setInterval(checkToPlay, 10);

//not useful right now, maybe in the future
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
