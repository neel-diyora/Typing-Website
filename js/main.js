// Selecting All Tags In Html For JavaScript Word
let time = document.querySelector("#time");
let counter = document.querySelector("#counter");
let start = document.querySelector("#start");

let result = document.querySelector("#result");

let words = document.querySelector("#words");
let characters = document.querySelector("#characters");
let error = document.querySelector("#error");

let typingText = document.querySelector("#typingText");
let userInput = document.querySelector("#userInput");

//Variables For CountDown
let timer = 0;
let interval = null;

//Variables To Store Errors , Words & Characters
let errorCounter = 0;
let wordsCounter = "";
let index = 0;

// Words For Speed Test
let text = `Most of us have a vague idea of it. Some people think science is what scientists do, which has a definitional problem. What is a scientist? Other people think science is making falsifiable or testable predictions, and maybe that’s closer to it. Sometimes people say, “It’s the scientific method.” And what is the scientific method? And then they start describing their junior high school chemistry experiment and lose the trail after that.Especially these days, when we’re told to “believe in science” which is an oxymoron people respect science, but they don’t understand what science is.`;


// disabled '#UserInput'
userInput.disabled = true;

// Start `Typing Speed Test` Game
start.addEventListener("click" , ()=>{
    start.innerText = `Start Typing`;    //Change Text On Click
    userInput.disabled = false;    //enabled '#UserInput

    // Appending Spans
    text.split("").forEach(characters =>{
        let spanTxt = document.createElement("span");
        spanTxt.innerText = characters;
        typingText.appendChild(spanTxt);
    })

    //start CountDown
    interval = setInterval(countDown , 1000);
    time.style.display = "grid";
    result.style.display = "none";
    start.style.pointerEvents = "none";
});

//CountDown Function
let countDown = ()=>{
    if(timer < 60){
        timer++;
        counter.innerText = timer;
    }
    else
    {
        userInput.disabled = true;    // disabled '#UserInput'
        time.style.display = "none";
        result.style.display = "flex";  //Display Result 

        wordsCounter = userInput.value;
        characters.innerText = index;    //total Characters
        words.innerText = wordsCounter.split(" ").length;    //total Words
        error.innerText = errorCounter;    //total errors

        //Stop Timer
        clearInterval(interval);
        timer = 0;    //reset Timer
    }
}

//match Characters
userInput.addEventListener("input" , e =>{
let userValue = userInput.value.split("");
// console.log(userValue);

let randomText = typingText.querySelectorAll("span");
// console.log(randomText);

//if user key will be equal to `backspace` so
if(e.inputType === "deleteContentBackward"){
    index--;
    randomText[index].classList.remove("correct");
    randomText[index].classList.remove("incorrect");
}
//if user Key Matched So
else if(userValue[index] === randomText[index].innerText){
    randomText[index].classList.add("correct");
    index++;
}
// if user key not matched so
else
{
    {
    randomText[index].classList.add("incorrect");
    index++;
    errorCounter++;
}
}
});