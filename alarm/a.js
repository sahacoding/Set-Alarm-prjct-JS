console.log('Alarm');

// QUESTION --------- Setting a Alarm clk


// Implement to setAlarm

const alarmSubmit = document.getElementById("alarmSubmit");
alarmSubmit.addEventListener('click', setAlarm);

// implement  RingBell

var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');

function ringBell(){
  audio.play();
}

function setAlarm(e){
  e.preventDefault();
  
  
  const alarm = document.getElementById("alarm");
  alarmDate = new Date(alarm.value);
  let h1 = alarmDate.getHours();
  //console.log(h1)
  let m1 = alarmDate.getMinutes();
  let s1 = alarmDate.getSeconds();

  const time1 = document.getElementById("time1"); 
  //console.log( time1.innerHTML);
 time1.innerHTML =  h1 + ':' + m1 + ':' + s1 ;
  //console.log( time1.innerHTML);
  //console.log( time1.innerHTML[0]);
  var sp = time1.innerHTML.split(':');
  console.log( sp);
  console.log( sp[0]);
  console.log( sp[1]);
  console.log(`Set Alarm for ${alarmDate}`);
  console.log(typeof  alarmDate)
  //console.log(typeof  time1)

//Set AM or PM

  if(sp[0] >= 12){
    time1.innerHTML =  h1 + ':' + m1 + ':' + s1 + 'PM';
    console.log('PM')
  }
  else{
    time1.innerHTML =  h1 + ':' + m1 + ':' + s1 + 'AM';
    console.log('AM')
  }

  
//  implement and grab the clk's hrs and min hand
  
  const time = document.getElementById("time");
  const now = new Date();
  console.log(now);
    let h = now.getHours();
    let m = now.getMinutes();
  let s = now.getSeconds();
  //console.log(h, m, s);
  time.innerHTML =  h + ':' + m + ':' + s ;
   var ps = time.innerHTML.split(':');
   console.log( ps); 
  console.log( ps[0]);
 console.log(ps[1]);


// Condition to match the clk(hrs & min hand) with the SetAlarm(hrs & min hand)

  if((ps[0] && ps[1]) === (sp[0] && sp[1])){
    console.log('Yes i done it')
    ringBell();
  }
  else{
    console.log('not match')
  }

}

// Creating the clock

function showTime(){
  const time = document.getElementById("time");
 const now = new Date();
  let h = now.getHours();
  //console.log( h, (typeof h));
  let m = now.getMinutes();
  let s = now.getSeconds();
  //console.log(h, m, s);
  time.innerHTML =  h + ':' + m + ':' + s ;
  setTimeout(showTime, 1000) 
// console.log( time.innerHTML);
  // console.log( time.innerHTML[0]);
let ps = time.innerHTML.split(':');
  // console.log( ps);
  // console.log( ps[0]);

//Set AM or PM
if(ps[0] >= 12){
    time.innerHTML =  h + ':' + m + ':' + s + 'PM' ;
    //console.log('PM')
  }
  else{
    time.innerHTML =  h + ':' + m + ':' + s + 'AM' ;
    //console.log('AM')
  }
}

// Call the ShowTime function
showTime();



// var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
//   audio.play();






