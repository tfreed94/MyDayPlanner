// Global variables used for displaying time and setting to Local Storage.
var curHour = moment();
var curTimeDate = $('#currentDay')
// Function to display Month, day, year.
function dateTime() {
  var current = curHour.format('MMM Do , YYYY ');
  curTimeDate.text(current);
} dateTime()
