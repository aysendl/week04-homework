var question = ["Which built-in method calls a function for each element in the array?",
                "Which of the following function of String object creates a string to blink as if it were in a <blink> tag?",
                "Which built-in method returns the calling string value converted to upper case?",
                "Which of the following function of Array object joins all elements of an array into a string?",
                "Which of the following function of Array object adds one or more elements to the front of an array and returns the new length of the array?"] 

var options = [["while ()", "loop()", "foreach()", "none of them above ()"],
                ["anchor()", "big()", "blink()", "italics()"],
                ["toUpperCase()", "toUpper()", "changeCase(Case)", "None of the above"],
                ["concat()", "join()", "pop()", "map()"],
                ["unshift()", "sort()","splice()", "toString()"]]

var answer = [2, 2, 0, 0, 0]
var questionNumber = 0;
var score = 0;


function showQuestion(j) {

    var questionelement = document.getElementById("question-text");
    questionelement.textContent = question[j];
    
    var optionselement = document.getElementById("options");
    optionselement.innerHTML = "";
    
    var resultelement = document.getElementById("results")
    
    for (var i=0; i<options[j].length; i++){
        var btn = document.createElement("button"); // <button></button>
        btn.setAttribute("id", i); // <button id="option1"></button>
        btn.textContent = options[j][i]; // <button id="option1">while ()</button>
    
        btn.addEventListener("click", function(){
            if(this.id == answer[j]){
               resultelement.textContent="Correct!"
               score = score+20
            }
            else{
                resultelement.textContent="Wrong"
            }

            questionNumber++;

            if(questionNumber<question.length){
                showQuestion(questionNumber);
            }
            else {
                resultelement.textContent = "Your Final Score: " + score;
                questionelement.textContent = "All Done!";
                optionselement.innerHTML = "";
            }


        });
        
        optionselement.appendChild(btn);
    }
}


showQuestion(questionNumber);