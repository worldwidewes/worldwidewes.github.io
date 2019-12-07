 videojs.getPlayer('678f298077a268d744ee764419dda2ff').ready(function(){
	var player = this;
	//run your plugins
	player.bcTracker();
})




//Register Plugin
videojs.registerPlugin('bcTracker', function() {
  var player = this;
  var loop = setInterval(getCurrentTime, 1000)
  function getCurrentTime(){
  	var currTime = player.currentTime();
  	console.log('Current video time is ' + currTime);
  }
});