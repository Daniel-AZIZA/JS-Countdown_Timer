
function update (attribute, data) {
    document.getElementById(attribute).innerHTML = data;
}


function timer (sec, mins, hours, days) {
    setTimeout(function(){
        update("seconds", sec);
        sec++;
        if (sec < 61)
            timer(sec, mins, hours, days);
        
        if (sec == 60){
            mins++;
            timer(0, mins, hours, days);
            update("mins", mins);
        }

        if (mins === 60){
            hours++;
            timer(0, 0, hours, days);
            update("hours", hours);
        }

        if (hours == 60){
            days++;
            timer(0, 0, 0, days);
            update("days", days);
        }
        
    }, 1000);
}

timer(0,0,0,0);