var $start = document.getElementById('start')
$start.addEventListener('click', function() {
  setInterval(addSecond, 1000)
})

var timerState = {
  elapsedSeconds: 0,
  isRunning: false
}

function addSecond() {
  var $elapsed = document.getElementById('elapsed')
  timerState.elapsedSeconds++
  $elapsed.textContent = timerState.elapsedSeconds
}
