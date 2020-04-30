
//Global Variables
var currentDayEl = document.getElementById("currentDay");

    //Variable to store scheduale contents

    var nineAM = document.getElementById('9');
    var tenAM = document.getElementById('10');
    var elevenAM = document.getElementById('11');
    var twelvePM = document.getElementById('12');
    var onePM = document.getElementById('13');
    var twoPM = document.getElementById('14');
    var threePM = document.getElementById('15');
    var fourPM = document.getElementById('16');

    //Variable to store the save buttons

    var save9Button = document.getElementById("9Button");
    var save10Button = document.getElementById("10Button"); 
    var save11Button = document.getElementById("11Button"); 
    var save12Button = document.getElementById("12Button"); 
    var save1Button = document.getElementById("1Button"); 
    var save2Button = document.getElementById("2Button"); 
    var save3Button = document.getElementById("3Button"); 
    var save4Button = document.getElementById("4Button"); 

    //Elements to store the text input
    var text9AM = document.getElementById("9Text");
    var text10AM = document.getElementById("10Text");
    var text11AM = document.getElementById("11Text");
    var text12PM = document.getElementById("12Text");
    var text1PM = document.getElementById("1Text");
    var text2PM = document.getElementById("2Text");
    var text3PM = document.getElementById("3Text");
    var text4PM = document.getElementById("4Text");

    //Test
    // $("#9Text").append("Hello!");

//Calling Functions
colorChange();
getCurrentTime();

//Gets the current date using moment()
function getDate() {
    return moment().format("dddd, MMMM Do YYYY");
}

//Writes out the date at the top of the page
displayDate(getDate());
function displayDate(date) {
    currentDayEl.innerText = date;
}

//Gets the current hour using moment()
function getCurrentTime() {
    var time =  moment().hour();
    console.log("The time is " + time)
    return time;
}

//Changes color of the hour divs based on the current time.
function colorChange(event){
    var time = getCurrentTime();
    $(".time-block").each(function() {
        var blockHour =  parseInt($(this).attr("id"));
        console.log(blockHour);
        if (blockHour < time) {
            $(this).addClass("past");
        }
        else if (blockHour === time){
            $(this).removeClass("past");
            $(this).addClass("present");
        }else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    });
}

function saveText9(){
    var scheduleText = text9AM.value;
    localStorage.setItem("nine", scheduleText);
    console.log(localStorage.getItem("nine"));
}
function saveText10(){
    var scheduleText = text10AM.value;
    localStorage.setItem("ten", scheduleText);
    console.log(localStorage.getItem("ten"));
}
function saveText11(){
    var scheduleText = text11AM.value;
    localStorage.setItem("eleven", scheduleText);
    console.log(localStorage.getItem("eleven"));
}
function saveText12(){
    var scheduleText = text12PM.value;
    localStorage.setItem("twelve", scheduleText);
    console.log(localStorage.getItem("twelve"));
}
function saveText1(){
    var scheduleText = text1PM.value;
    localStorage.setItem("one", scheduleText);
    console.log(localStorage.getItem("one"));
}
function saveText2(){
    var scheduleText = text2PM.value;
    localStorage.setItem("two", scheduleText);
    console.log(localStorage.getItem("two"));
}
function saveText3(){
    var scheduleText = text3PM.value;
    localStorage.setItem("three", scheduleText);
    console.log(localStorage.getItem("three"));
}
function saveText4(){
    var scheduleText = text4PM.value;
    localStorage.setItem("four", scheduleText);
    console.log(localStorage.getItem("four"));
}

//Event Listeners
save9Button.addEventListener("click", saveText9);
save10Button.addEventListener("click", saveText10); 
save11Button.addEventListener("click", saveText11); 
save12Button.addEventListener("click", saveText12); 
save1Button.addEventListener("click", saveText1); 
save2Button.addEventListener("click", saveText2); 
save3Button.addEventListener("click", saveText3) 
save4Button.addEventListener("click", saveText4); 





