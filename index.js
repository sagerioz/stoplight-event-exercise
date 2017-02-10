(function() {
  'use strict';
var controls = document.getElementById('controls');

var go = document.getElementById('goButton');
var stopGreen = document.getElementById('goLight')

var stop = document.getElementById('stopButton');
var stopRed = document.getElementById('stopLight');

var slow = document.getElementById('slowButton');
var stopOrnge = document.getElementById('slowLight');
// stop.addEventListener('click', function(){
//   stopRed.classList.toggle('stop');
//   stopOrnge.classList.remove('slow');
//   stopGreen.classList.remove('go');
//   console.log("Red bulb on");
//   })
//   //-------------------------
//
//   slow.addEventListener('click', function(){
//     stopOrnge.classList.toggle('slow');
//     stopRed.classList.remove('stop');
//     stopOrnge.classList.remove('go');
//     console.log("Orange bulb on");
//
//   })
//   //-------------green
//
//   go.addEventListener('click', function(){
//     stopGreen.classList.toggle('go');
//     stopRed.classList.remove('stop');
//     stopOrnge.classList.remove('slow');
//     console.log("Green bulb on");
//   })
  //-----------------------------
  controls.addEventListener("mouseover", function(event) {
    if (event.target.id === "stopButton" || event.target.id === "slowButton" || event.target.id === "goButton") {
      console.log("Enter " + event.target.innerText + " button!");
    }
  })
  // YOUR CODE HERE
//-------------------------------------redo--------------------------------------------
controls.addEventListener("click", function(){
  console.log("Event target", event.target);
  if(event.target.id === 'stopButton'){
    stopRed.classList.toggle('stop');
    stopOrnge.classList.remove('slow');
    stopGreen.classList.remove('go');
    console.log("Red bulb on");
  }else if(event.target.id === 'slowButton'){
    stopOrnge.classList.toggle('slow');
    stopRed.classList.remove('stop');
    stopOrnge.classList.remove('go');
    console.log("Orange bulb on");

  }else if(event.target.id === 'goButton'){
    stopGreen.classList.toggle('go');
    stopRed.classList.remove('stop');
    stopOrnge.classList.remove('slow');
    console.log("Green bulb on");
  }
})
controls.addEventListener("mouseover", function(event) {
  if (event.target.id === "stopButton" || event.target.id === "slowButton" || event.target.id === "goButton") {
    console.log("Enter " + event.target.innerText + " button!");
  }
})

controls.addEventListener("mouseout", function(event) {
  if (event.target.id === "stopButton" || event.target.id === "slowButton" || event.target.id === "goButton") {
    console.log("Left " + event.target.innerText + " button!");
  }
})




})();
// document.getElementById("MyElement").classList.add('class');
//
// document.getElementById("MyElement").classList.remove('class');
//
// if ( document.getElementById("MyElement").classList.contains('class') )
//
// document.getElementById("MyElement").classList.toggle('class');
