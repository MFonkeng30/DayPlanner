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

//10 AM
var time2 = beforeTime.add(1, "h");

time2 = time2.format('hh:mm A');

$(".block2").text(time2);

//11 AM
var time3 = beforeTime.add(1, "h");

time3 = time3.format('hh:mm A');

$(".block3").text(time3);

//12 PM
var time4 = beforeTime.add(1, "h");

time4 = time4.format('hh:mm A');

$(".block4").text(time4);

//1 PM
var time5 = beforeTime.add(1, "h");

time5 = time5.format('hh:mm A');

$(".block5").text(time5);

//2 PM
var time6 = beforeTime.add(1, "h");

time6 = time6.format('hh:mm A');

$(".block6").text(time6);

//3 PM
var time7 = beforeTime.add(1, "h");

time7 = time7.format('hh:mm A');

$(".block7").text(time7);

//4 PM
var time8 = beforeTime.add(1, "h");

time8 = time8.format('hh:mm A');

$(".block8").text(time8);

//5 PM
var time9 = beforeTime.add(1, "h");

time9 = time9.format('hh:mm A');

$(".block9").text(time9);

//Function comparing time block to current time
function testTime() {
    // Add time1 9AM
    time1 = moment().startOf('day').add(9, "hours");
    // Adjusts current time to the hour
    currentTime = currentTime.startOf("hour");
    // Add time1 if/else
    if (currentTime.isAfter(time1)) {
        $(".form9").addClass("past");
    }
    else if (currentTime.isBefore(time1)) {
        $(".form9").addClass("future");
    }
    else if (currentTime.isSame(time1)) {
        $(".form9").addClass("present");
    };
}    