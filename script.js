//Moment declartion of day and time
moment(Date);
$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
//Moment Current time
var currentTime = moment();
//Returns Current time to nearest hour
currentTime = currentTime.startof("hour");
//Calculates start of day + 9 to return 9am
var beforeTime = moment().startof('day').add(9, "hours");

//Time Blocks
//9 AM 
var time1 = beforeTime.add(0, "h");

time1 = time1.format('hh:mm A');

$(".block1").text(time1);