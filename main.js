var $start = document.getElementById('start')
var $reset = document.getElementById('reset')
var $elapsed = document.getElementById('elapsed')

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

  timerState.elapsedSeconds = 0
  $elapsed.textContent = timerState.elapsedSeconds
  timerState.isRunning = false

  $start.classList.remove('paused')
  $start.textContent = 'Start Timing'
  $reset.classList.add('hidden')
})

var timerState = {
  elapsedSeconds: 0,
  isRunning: false,
  intervalID: null
}

function addSecond() {
  timerState.elapsedSeconds++
  $elapsed.textContent = timerState.elapsedSeconds

  var $limit = document.getElementById('limit')
  if (timerState.elapsedSeconds === parseInt($limit.value, 10)) {
    clearInterval(timerState.intervalID)
    timerState.isRunning = false
  }
}
