var $start = document.getElementById('start')
$start.addEventListener('click', function() {

})

function addSecond() {
  var $elapsed = document.getElementById('elapsed')
  var elapsedSeconds = parseInt($elapsed.textContent, 10)
  elapsedSeconds++
  $elapsed.textContent = elapsedSeconds
}
