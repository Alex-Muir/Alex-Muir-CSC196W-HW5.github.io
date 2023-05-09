function sendAlert(){
    alert("Hello, world!");
}

function makeBigger(){
    document.getElementById("inputText").style.fontSize="24pt";
}

function fancifyText(){
    document.getElementById("inputText").style.fontWeight="bold";
    document.getElementById("inputText").style.color="blue";
    document.getElementById("inputText").style.textDecoration="underline";
}

function boringText(){
    document.getElementById("inputText").style.fontWeight="normal";
}

function makeMoo(){
    let userInput = document.getElementById("inputText").value;
    userInput = userInput.toUpperCase();
    let sentence = userInput.split(".");
    
    for(let i = 0; i < sentence.length - 1; i++){
        let word = sentence[i] + "-Moo";
        sentence[i] = word;
    }

    userInput = sentence.join("");

    document.getElementById("inputText").value=userInput;


}