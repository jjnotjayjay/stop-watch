var $start = document.getElementById('start')
var $reset = document.getElementById('reset')
var $elapsed = document.getElementById('elapsed')
var $limit = document.getElementById('limit')

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

  $elapsed.classList.remove('expired')
  $start.classList.remove('paused')
  $start.textContent = 'Start Timing'
  $reset.classList.add('hidden')
})

$limit.addEventListener('input', function (e) {
  timerState.limit = e.target.valueAsNumber
})

var timerState = {
  elapsedSeconds: 0,
  isRunning: false,
  intervalID: null,
  limit: null
}

function addSecond() {
  timerState.elapsedSeconds++
  $elapsed.textContent = timerState.elapsedSeconds

  if (timerState.elapsedSeconds === timerState.limit) {
    clearInterval(timerState.intervalID)
    timerState.isRunning = false
    $elapsed.classList.add('expired')
  }
}
