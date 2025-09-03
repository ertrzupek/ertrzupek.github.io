let secretCode = "";
let codeValid = false;

//will need to add more functionality to test if key is valid
function getInput() {
    var x = document.getElementById("form");
    secretCode = x.elements[0].value;
    if(/[a-zA-Z]/.test(secretCode)) {
      document.getElementById("keyError").innerHTML = "key not valid (contains letters)";
      codeValid = false;
    } else if(secretCode.length < 42) {
        document.getElementById("keyError").innerHTML = "key not valid (not long enough)";
        codeValid = false;
    } else if(secretCode.length > 42) {
      document.getElementById("keyError").innerHTML = "key not valid (too long)";
      codeValid = false;
    } else {
      document.getElementById("keyError").innerHTML = "key located!";
      codeValid = true;
    }

}




let button = document.getElementById("send");
button.onclick = () => {
    if(codeValid) {
      window.location.href = 'game.html?' + secretCode;
    }
}

//things to save
//character (1)
//triplength (1)
//footsteps (1)
//trip (3)
//letters (3)
//flowers (3)
//scrollloc (5)
//scenecode (25)

//120020007034097690241234055555555555555555
//640940229398974430176439085995859958599585
