var $start = document.getElementById('start')
$start.addEventListener('click', function () {
  if (!timerState.isRunning) {
    timerState.intervalID = setInterval(addSecond, 1000)
  }
  else {
    clearInterval(timerState.intervalID)
  }
  timerState.isRunning = !timerState.isRunning
})

var timerState = {
  elapsedSeconds: 0,
  isRunning: false,
  intervalID: null
}

function addSecond() {
  var $elapsed = document.getElementById('elapsed')
  timerState.elapsedSeconds++
  $elapsed.textContent = timerState.elapsedSeconds
}
