setInterval(() => {
    d = new Date();//now is set to get present date with time
    htime = d.getHours();//this function is used to obtain hours in d
    mtime = d.getMinutes();//"" minutes"
    stime = d.getSeconds();//""seconds"
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;
//now select the ids to rotate them according to time
    document.getElementById("hour").style.transform = `rotate(${hrotation}deg)`;
    document.getElementById("minute").style.transform = `rotate(${mrotation}deg)`;
    document.getElementById("second").style.transform = `rotate(${srotation}deg)`;
}, 1000);