(function() {
  'use strict';
var stop = document.getElementById('stopButton');
var stopRed = document.getElementById('stopLight')
stop.addEventListener('click', function(){
  stopRed.classList.toggle('stop');
  console.log("Red bulb on");
  })
  //-------------------------
  var slow = document.getElementById('slowButton');
  var stopOrnge = document.getElementById('slowLight')
  slow.addEventListener('click', function(){
    stopOrnge.classList.toggle('slow');
    console.log("Orange bulb on");

  })
  //------------------------
  var go = document.getElementById('goButton');
  var stopGreen = document.getElementById('goLight')
  go.addEventListener('click', function(){
    stopGreen.classList.toggle('go');
    console.log("Green bulb on");
  })
  //-----------------------------
  stop.addEventListener('mouseenter', function(){
    console.log("Entered stopRed button");
      })
  slow.addEventListener('mouseenter', function(){
      console.log("Entered stopOrnge button");
    })
  go.addEventListener('mouseenter', function(){
      console.log("Entered stopGreen button");
   })
  // YOUR CODE HERE
})();
// document.getElementById("MyElement").classList.add('class');
//
// document.getElementById("MyElement").classList.remove('class');
//
// if ( document.getElementById("MyElement").classList.contains('class') )
//
// document.getElementById("MyElement").classList.toggle('class');
