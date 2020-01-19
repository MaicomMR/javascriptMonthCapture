
// Just capturing HTML elements to display months on index.html
const displayMonth = document.getElementById('month');

const lastThreeMonthsHTML = document.getElementById('lastThreeMonths');

const nextThreeMonthsHTML = document.getElementById('nextThreeMonths');




// Months names
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

// capture the current date
const date = new Date();

// Capture the current monnth, in a number value
// 0 = January, 1 February...
const currentMonth = date.getMonth();

// If you need more months you can use and FOR instead of this
const captureLastThreeMonths = [currentMonth - 1, currentMonth - 2, currentMonth - 3]
const captureNextThreeMonths = [currentMonth + 1, currentMonth + 2, currentMonth + 3]

var lastThreeMonths = captureLastThreeMonths.map(setMonthName)
var nextThreeMonths = captureNextThreeMonths.map(setMonthName)


function setMonthName(num) {
    // If your are on January, your last month are "-1", but you need the correspondent of December array value
    if (num < 0){
        num += 12;
    }
    // And, if your are on December and want to show January, you need to decrease your number to Month name correspondent
    if (num > 12){
        num -= 12;
    }

    // Set the month name
    num = monthNames[num];
    return num;
}


// Trash script only for show the months on index.html
displayMonth.innerHTML = monthNames[currentMonth];
lastThreeMonthsHTML.innerHTML = lastThreeMonths;
nextThreeMonthsHTML.innerHTML = nextThreeMonths;