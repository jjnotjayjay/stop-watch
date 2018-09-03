var $start = document.getElementById('start')
$start.addEventListener('click', function() {
  setInterval(addSecond, 1000)
})

function addSecond() {
  var $elapsed = document.getElementById('elapsed')
  var elapsedSeconds = parseInt($elapsed.textContent, 10)
  elapsedSeconds++
  $elapsed.textContent = elapsedSeconds
}
