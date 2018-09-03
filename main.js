var $start = document.getElementById('start')
$start.addEventListener('click', function () {
  var $reset = document.getElementById('reset')
  if (!timerState.isRunning) {
    if (!timerState.elapsedSeconds) {
      $reset.classList.remove('hidden')
    }
    timerState.intervalID = setInterval(addSecond, 1000)
    $start.textContent = 'Stop Timing'
  }
  else {
    clearInterval(timerState.intervalID)
    $start.textContent = 'Start Timing'
  }
  timerState.isRunning = !timerState.isRunning
  $start.classList.toggle('paused')
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
