function random(size) {
  return Math.floor(Math.random() * size)
}
let click = 20
let width = 300
let height = 300
let target = {
  x: random(width),
  y: random(height),
}
function getDistance(event, target) {
  let diffX = event.offsetX - target.x
  let diffY = event.offsetY - target.y
  return Math.sqrt(diffX * diffX + diffY * diffY)
}
function getDistanceHint(distance) {
  if (distance < 10) {
    return 'Boiling hot!'
  } else if (distance < 20) {
    return 'Really hot'
  } else if (distance < 40) {
    return 'Hot'
  } else if (distance < 80) {
    return 'Warm'
  } else if (distance < 160) {
    return 'Cold'
  } else if (distance < 220) {
    return 'Really cold'
  } else if (distance < 300) {
    return 'Really really cold!'
  } else {
    return 'Freezing'
  }
}
$('#clicks').text('Attempts: ' + click)
$('#map').click((event) => {
  let distance = getDistance(event, target)
  let distanceHint = getDistanceHint(distance)
  $('#distance').text(distanceHint)
  $('#geo').text(distance)
  click--
  if (click <= 0) {
    return alert('GAME OVER')
  }
  $('#clicks').text('Attempts: ' + click)
  if (distance < 8) {
    return alert('Found the treasure in ' + (19 - click) + ' clicks!')
  }
})
