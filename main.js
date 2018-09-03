var $start = document.getElementById('start')
var $reset = document.getElementById('reset')

$start.addEventListener('click', function () {
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

$reset.addEventListener('click', function () {
  clearInterval(timerState.intervalID)
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
