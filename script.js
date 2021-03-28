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
        else {
            $(this).addClass("past");
        }
    })
}colorCode()
