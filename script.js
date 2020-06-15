//Moment declartion of day and time
moment(Date);
$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));
//Moment Current time
var currentTime = moment();
//Returns current time to the nearest hour
currentTime = currentTime.startOf("hour");
//Calculates start of day + 9 to return 9am
var beforeTime;  

beforeTime = moment().startof('day').add(9, "hours");

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
    // Add time2 10AM
    time2 = moment().startOf('day').add(9, "hours");
    // Adjusts current time to the hour
    currentTime = currentTime.startOf("hour");
    // Add time2 if/else
    if (currentTime.isAfter(time2)) {
        $(".form10").addClass("past");
    }
    else if (currentTime.isBefore(time2)) {
        $(".form10").addClass("future");
    }
    else if (currentTime.isSame(time2)) {
        $(".form10").addClass("present");
    };
    // Add time3 11AM
    time3 = moment().startOf('day').add(9, "hours");
    // Adjusts current time to the hour
    currentTime = currentTime.startOf("hour");
    // Add time3 if/else
    if (currentTime.isAfter(time3)) {
        $(".form11").addClass("past");
    }
    else if (currentTime.isBefore(time3)) {
        $(".form11").addClass("future");
    }
    else if (currentTime.isSame(time3)) {
        $(".form11").addClass("present");
    };
    // Add time4 12PM  
    time4 = moment().startOf('day').add(9, "hours");
    // Adjusts current time to the hour
    currentTime = currentTime.startOf("hour");
    // Add time4 if/else
    if (currentTime.isAfter(time4)) {
        $(".form12").addClass("past");
    }
    else if (currentTime.isBefore(time4)) {
        $(".form12").addClass("future");
    }
    else if (currentTime.isSame(time4)) {
        $(".form12").addClass("present");
    };
    // Add time5 1PM
    time5 = moment().startOf('day').add(9, "hours");
    // Adjusts current time to the hour
    currentTime = currentTime.startOf("hour");
    // Add time5 if/else
    if (currentTime.isAfter(time5)) {
        $(".form1").addClass("past");
    }
    else if (currentTime.isBefore(time5)) {
        $(".form1").addClass("future");
    }
    else if (currentTime.isSame(time5)) {
        $(".form1").addClass("present");
    };
    // Add time6 2PM
    time6 = moment().startOf('day').add(9, "hours");
    // Adjusts current time to the hour
    currentTime = currentTime.startOf("hour");
    // Add time6 if/else
    if (currentTime.isAfter(time6)) {
        $(".form2").addClass("past");
    }
    else if (currentTime.isBefore(time6)) {
        $(".form2").addClass("future");
    }
    else if (currentTime.isSame(time6)) {
        $(".form2").addClass("present");
    };
    // Add time7 3PM
    time7 = moment().startOf('day').add(9, "hours");
    // Adjusts current time to the hour
    currentTime = currentTime.startOf("hour");
    // Add time7 if/else
    if (currentTime.isAfter(time7)) {
        $(".form3").addClass("past");
    }
    else if (currentTime.isBefore(time7)) {
        $(".form3").addClass("future");
    }
    else if (currentTime.isSame(time7)) {
        $(".form3").addClass("present");
    };
    // Add time8 4PM
    time8 = moment().startOf('day').add(9, "hours");
    // Adjusts current time to the hour
    currentTime = currentTime.startOf("hour");
    // Add time8 if/else
    if (currentTime.isAfter(time8)) {
        $(".form4").addClass("past");
    }
    else if (currentTime.isBefore(time8)) {
        $(".form4").addClass("future");
    }
    else if (currentTime.isSame(time8)) {
        $(".form4").addClass("present");
    };
    // Add time9 5PM
    time9= moment().startOf('day').add(9, "hours");
    // Adjusts current time to the hour
    currentTime = currentTime.startOf("hour");
    // Add time9 if/else
    if (currentTime.isAfter(time9)) {
        $(".form5").addClass("past");
    }
    else if (currentTime.isBefore(time9)) {
        $(".form5").addClass("future");
    }
    else if (currentTime.isSame(time9)) {
        $(".form5").addClass("present");
    };
}    

//Call function
testTime();

var x = [9, 10, 11, 12, 1, 2, 3, 4, 5];

for (var i = 0; i < x.length; i++); {
    var dataHour = localStorage.getItem(x[i]);

    $(".form" + x[i]).val(dataHour);
}

//Event listener for local storage
$(".saveBtn").click(function () {
    event.preventDefault();
    var formValue = $(this).siblings(".form-control").val();
    console.log("It worked");
    var listItem = $(this).parent().data("hour");

    localStorage.setItem(listItem, formValue);
});