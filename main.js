var $start = document.getElementById('start')
$start.addEventListener('click', function () {
  if (!timerState.isRunning) {
    setInterval(addSecond, 1000)
  }
  timerState.isRunning = !timerState.isRunning
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
