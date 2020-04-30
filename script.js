
//Global Variables
var currentDayEl = document.getElementById("currentDay");
var blockTime = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
//Calling Functions
// drawBlocks();

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
    return moment().hour();
}

// //Creates the hour blocks, assigns an hour id. Adds a counter
// function drawBlocks() {
//     for (let i = 0; i < blockTime.length; i++) {
//         var hourBlock = document.createElement("div");
//         var submitButton = document.createElement("button");
//         submitButton.setAttribute("class", "submitButton");
//         submitButton.setAttribute("id", blockTime[i] + " button")
//         hourBlock.setAttribute("class", "hourBlock");
//         hourBlock.setAttribute("id", blockTime[i]);
//         hourBlock.innerText = blockTime[i] + ":";
//         submitButton.innerText = "Update"
//         $(".container").append(hourBlock);
//         $(hourBlock).append(submitButton);
//     }
// }





