
//Global Variables
var currentDayEl = document.getElementById("currentDay");
var blockTime = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
//Calling Functions
// drawBlocks();
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

function colorChange(event){
    var timeBlock = getCurrentTime();
    $(".time-block").each(function() {
        var blockHour =  parseInt($(this).attr("id"));
        console.log(blockHour);
        if (blockHour < timeBlock) {
            $(this).addClass("past");
        }
        else if (blockHour === timeBlock){
            $(this).removeClass("past");
            $(this).addClass("present");
        }else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    });
}



