
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

//Event Listeners
save9Button.addEventListener("click", function(){
    console.log("Test Button 9");
}) 
save10Button.addEventListener("click", function(){
    console.log("Test Button 10");
}) 
save11Button.addEventListener("click", function(){
    console.log("Test Button 11");
}) 
save12Button.addEventListener("click", function(){
    console.log("Test Button 12");
}) 
save1Button.addEventListener("click", function(){
    console.log("Test Button 1");
}) 
save2Button.addEventListener("click", function(){
    console.log("Test Button 2");
}) 
save3Button.addEventListener("click", function(){
    console.log("Test Button 3");
}) 
save4Button.addEventListener("click", function(){
    console.log("Test Button 4");
}) 





