console.log("Working");
var today = moment().hour();
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
//date at top of page
console.log(today);
//Jobs var- Insert text from text info into respective hour
var jobs = {
    "9":[],
    "10":[""],
    "11":[""],
    "12":[""],
    "13":[""],
    "14":[""],
    "15":[""],
    "16":[""],
    "17":[""]
};
//save tasks in local storage
var saveJobs = $(".saveBtn").click (function() {
    localStorage.setItem("jobs",JSON.stringify(jobs));
    console.log(jobs);
});
//Load tasks in local storage 

//add timer that changes times css using moment.js
function pastPresentFuture() {
    $(".time").each(function(){
        var colors = $(this).attr("id");
        if (colors == today){
            $(this).addClass("present");
        }
        else if (colors > today){
            $(this).addClass("future");
        }
        else {$(this).addClass("past");
        }
    });
};
pastPresentFuture()

//lock user out of text area when time has passed 