$(document).ready(function(){
  var minutes = 25;
  var seconds = '00';
  var intervalId;
  showTheTime();
  
  function playSound() {
    var sound = document.getElementById("audio");
    sound.play()
  }
  
  //Start time
  function showTheTime(){
  var theTime = minutes + ":" + seconds;
  $("#timer").html(theTime);
  }
    
  $("#plus").click(function(){
    minutes = minutes + 1;
    $("#timer").html(showTheTime);
  });
  $("#minus").click(function(){
    minutes = minutes - 1;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    $("#timer").html(showTheTime);
  });
  $("#reset").click(function(){
    clearInterval(intervalId);
    minutes = 25;
    var seconds = '00';
    $("#timer").html(showTheTime);
  });
  
  //The timer itself
  
  function startTimer(duration, display) {
      var timer = duration, minutes, seconds;
      intervalId = setInterval(function () {
          minutes = parseInt(timer / 60, 10);
          seconds = parseInt(timer % 60, 10);

          minutes = minutes < 10 ? "0" + minutes : minutes;
          seconds = seconds < 10 ? "0" + seconds : seconds;

          display.text(minutes + ":" + seconds);
          
          if (minutes == 0 && seconds == 0) {
            playSound();
            return;
          }
          if (--timer < 0) {
              timer = duration;
          }
      }, 1000);
  }
  
  $("#start").click(function() {
    playSound();
    //$("#start").click(function() {
    jQuery(function ($) {
      var duration = 60 * minutes,
          display = $('#timer');
      startTimer(duration, display);
    });
  })
  

  
});