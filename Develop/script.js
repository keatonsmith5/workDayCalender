var currentDayEl = document.getElementById("currentDay");
var currentTimeEl = document.getElementById("currentTime")
var rowEl = document.querySelectorAll(".row");
var presentEl = document.querySelectorAll(".present");
var pastEl = document.querySelectorAll(".past");
var futureEl = document.querySelectorAll("future");
var jumbotronEl = document.querySelector(".jumbotron");
var timeBlockEl = document.getElementById("time-block");
var savBtnEl = document.querySelectorAll(".saveBtn");
var saveIconEl = document.querySelectorAll(".fa-save");


//Jumbotron

currentDayEl.innerHTML = moment().format('dddd, MMM Do');


//Time
var hourNineEl = document.querySelector(".hour-1");
var hourTenEl = document.querySelector(".hour-2");
var hourElevenEl = document.querySelector(".hour-3");
var hourTwelveEl = document.querySelector(".hour-4");
var hourOneEl = document.querySelector(".hour-5");
var hourTwoEl = document.querySelector(".hour-6");
var hourThreeEl = document.querySelector(".hour-7");
var hourFourEl = document.querySelector(".hour-8");
var hourFiveEl = document.querySelector(".hour-9");


var myVar = setInterval(myTimer, 1000);

function myTimer() {
  var date = new Date();
  var t = date.toLocaleTimeString();
  currentTimeEl.innerHTML = t;s
};

var hourNineEl = "09:00";
var hourTenEl = "10:00";
var hourElevenEl = "11:00";
var hourTwelveEl = "12:00";
var hourOneEl = "13:00";
var hourTwoEl = "14:00";
var hourThreeEl = "15:00";
var hourFourEl = "16:00";
var hourFiveEl = "17:00"

if (currentTimeEl > hourNineEl) {
    past ()
  } else if (currentTimeEl === hourNineEl) {
    present ()
  } else {
    future ()
  };

  function past (){
    $("textarea-1").addClass("past");
  };
  function present (){
    $("textarea-1").addClass("present");
  };
  function future (){
    $("textarea-1").addClass("future");
  };  

  if (currentTimeEl > hourTenEl) {
    past ()
  } else if (currentTimeEl === hourTenEl) {
    present ()
  } else {
    future ()
  };

  function past (){
    $("textarea-2").addClass("past");
  };
  function present (){
    $("textarea-2").addClass("present");
  };
  function future (){
    $("textarea-2").addClass("future");
  };  
  if (currentTimeEl > hourElevenEl) {
    past ()
  } else if (currentTimeEl === hourElevenEl) {
    present ()
  } else {
    future ()
  };

 


