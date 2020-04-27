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

var highscores =[]
var questionNumber = 0;
var btnstart = document.getElementById("start");
btnstart.addEventListener("click", function(){
    document.getElementById("card").style.display="block";
    document.getElementById("description").style.display="none";
    btnstart.style.display="none";
    timeLeft = 75;
    timerelement.textContent = "Time:" + timeLeft;
    starttimer(timeLeft);
})
var form = document.getElementById("form")
var initials = document.getElementById("initials")
var submit = document.getElementById("submit")
var goback =document.getElementById("goback")
var clear =document.getElementById("clear")
var scorelist=document.getElementById("scorelist")
var questionelement = document.getElementById("question-text");
var optionselement = document.getElementById("options");
var resultelement = document.getElementById("results");
var scorefinal = document.getElementById("scoredisplay");
var timerelement = document.getElementById("timer")
var timeLeft = 75;
var score = 0;
var timeInterval;
function starttimer() {
 
    timeInterval = setInterval(function() {
      timerelement.textContent = "Time:" + timeLeft;
      timeLeft--;
  
      if (timeLeft <= 0) {
        score = timeLeft;
        timerelement.textContent = "";
        clearInterval(timeInterval);
        scorefinal.style.display ="block"
        scorefinal.textContent = "Your Final Score: " + score;
        questionelement.textContent = "All Done!";
        optionselement.innerHTML = "";
        form.style.display="block";
      }
  
    }, 1000);
  }


submit.addEventListener("click", function(){
    form.style.display="none";
    resultelement.textContent = "";
    questionelement.textContent = "High Scores";
    lastpage.style.display = "block";
    

    highscores.push(initials.value + " - " + score);
    scorelist.innerHTML = "";
    for(var k=0; k<highscores.length; k++){
        var item = document.createElement("li");
        item.textContent = highscores[k];
        scorelist.appendChild(item);    
    }


    goback.addEventListener("click",function(){
        document.getElementById("card").style.display="none"
        document.getElementById("description").style.display="block"
        btnstart.style.display="inline-block" 
        questionNumber=0
        timeLeft=75  
        initials.value = ""
        lastpage.style.display="none"
        scorefinal.style.display ="none"
        showQuestion(questionNumber);

    });
    clear.addEventListener("click", function(){
        scorelist.innerHTML = "";
        highscores =[];
    })    
});
function showQuestion(j) {

    questionelement.textContent = question[j];
    
    optionselement.innerHTML = "";
    
    
    for (var i=0; i<options[j].length; i++){
        var btn = document.createElement("button"); // <button></button>
        btn.setAttribute("id", "option"+i); // <button id="option1"></button>
        btn.textContent = (i+1) + ". " + options[j][i]; // <button id="option1">while ()</button>
    
        btn.addEventListener("click", function(){
            if(this.id == "option"+answer[j]){
               resultelement.textContent="Correct!";
        
            }
            else{
                resultelement.textContent="Wrong";
                timeLeft = timeLeft-15
            }


            setTimeout(function(){
                resultelement.textContent=""
            },2000)

            questionNumber++;

            if(questionNumber<question.length){
                showQuestion(questionNumber);
            }
            else {
                score = timeLeft;
                timerelement.textContent = "";
                clearInterval(timeInterval);
                scorefinal.style.display ="block"
                scorefinal.textContent = "Your Final Score: " + score;
                questionelement.textContent = "All Done!";
                optionselement.innerHTML = "";
                form.style.display="block";
            }


        });
        
        optionselement.appendChild(btn);
        optionselement.appendChild(document.createElement("br"));
    }
}


showQuestion(questionNumber);