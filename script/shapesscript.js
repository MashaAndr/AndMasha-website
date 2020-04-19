// function GetClock(){
// var d=new Date();
// var nmonth=d.getMonth(),ndate=d.getDate(),nyear=d.getFullYear();
// var nhour=d.getHours(),nmin=d.getMinutes(),nsec=d.getSeconds();
// if(nmin<=9) nmin="0"+nmin;
// if(nsec<=9) nsec="0"+nsec;
//
// var clocktext=""+ndate+""+(nmonth+1)+"<br>"+nyear+"<br>"+nhour+""+nmin+""+nsec+"";
// document.getElementById('clockbox').innerHTML=clocktext;
// }
//
// GetClock();
// setInterval(GetClock,1000);

function GetClock(){
var d=new Date();
var nmonth=d.getMonth(),ndate=d.getDate(),nyear=d.getFullYear();
var nhour=d.getHours(),nmin=d.getMinutes(),nsec=d.getSeconds();
if(nmin<=9) nmin="0"+nmin;
if(nsec<=9) nsec="0"+nsec;

var clocktext=""+nsec+"";
document.getElementById('clockbox-sec').innerHTML=clocktext;
}

GetClock();
setInterval(GetClock,1000);


function GetClock2(){
var d=new Date();
var nmonth=d.getMonth(),ndate=d.getDate(),nyear=d.getFullYear();
var nhour=d.getHours(),nmin=d.getMinutes(),nsec=d.getSeconds();
if(nmin<=9) nmin="0"+nmin;
if(nsec<=9) nsec="0"+nsec;

var clocktext=""+(nmonth+1)+"";
document.getElementById('clockbox-month').innerHTML=clocktext;
}

GetClock2();
setInterval(GetClock,1000);

function GetClock3(){
var d=new Date();
var nmonth=d.getMonth(),ndate=d.getDate(),nyear=d.getFullYear();
var nhour=d.getHours(),nmin=d.getMinutes(),nsec=d.getSeconds();
if(nmin<=9) nmin="0"+nmin;
if(nsec<=9) nsec="0"+nsec;

var clocktext=""+nyear+"";
document.getElementById('clockbox-year').innerHTML=clocktext;
}

GetClock3();
setInterval(GetClock,1000);

function GetClock4(){
var d=new Date();
var nmonth=d.getMonth(),ndate=d.getDate(),nyear=d.getFullYear();
var nhour=d.getHours(),nmin=d.getMinutes(),nsec=d.getSeconds();
if(nmin<=9) nmin="0"+nmin;
if(nsec<=9) nsec="0"+nsec;

var clocktext=""+nhour+"";
document.getElementById('clockbox-hour').innerHTML=clocktext;
}

GetClock4();
setInterval(GetClock,1000);

function GetClock5(){
var d=new Date();
var nmonth=d.getMonth(),ndate=d.getDate(),nyear=d.getFullYear();
var nhour=d.getHours(),nmin=d.getMinutes(),nsec=d.getSeconds();
if(nmin<=9) nmin="0"+nmin;
if(nsec<=9) nsec="0"+nsec;

var clocktext=""+nmin+"";
document.getElementById('clockbox-min').innerHTML=clocktext;
}

GetClock5();
setInterval(GetClock,1000);

function GetClock6(){
var d=new Date();
var nmonth=d.getMonth(),ndate=d.getDate(),nyear=d.getFullYear();
var nhour=d.getHours(),nmin=d.getMinutes(),nsec=d.getSeconds();
if(nmin<=9) nmin="0"+nmin;
if(nsec<=9) nsec="0"+nsec;

var clocktext=""+ndate+"";
document.getElementById('clockbox-date').innerHTML=clocktext;
}

GetClock6();
setInterval(GetClock,1000);
