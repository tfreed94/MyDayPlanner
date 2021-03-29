// Global variables used for displaying time and setting to Local Storage.
var curHour = moment();
var curTimeDate = $('#currentDay')
// Function to display Month, day, year.
function dateTime() {
  var current = curHour.format('MMM Do , YYYY ');
  curTimeDate.text(current);
} dateTime()
// Function that changes color of class '.row" depending on hour of day
// Present time(red) Past time(gray) Future Time(green)
function colorCode() {
    time = moment().hours();
    $(".row").each(function () {
        var curTime = parseInt($(this).attr("id"));
        if (curTime === time) {
            $(this).addClass("present");
        }
        if (curTime > time) {
            $(this).addClass("future")
        }
        if (curTime < time) {
            $(this).addClass("past");
        }
    })
}colorCode()
// Get EventID from local storage // if "plans" is true then the plans created by user will not disappear when the app is re-opened
function createPlans() {
    $(".row").each(function () {
        var eventID = $(this).attr("id");
        var plans = localStorage.getItem(eventID);
        if (plans) {
            $(this).children(".plans").val(plans);
        }
    })
}createPlans()
// Saving the user created plans and the hour they created them in to Local Storage
$('.saveBtn').on("click", function () {
    var curHour = $(this).parent().attr("id");
    var plans = $(this).siblings(".plans").val();
    localStorage.setItem(curHour, plans);
})