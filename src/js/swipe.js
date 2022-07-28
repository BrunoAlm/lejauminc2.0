// CARROSSEL
const track = document.getElementById('carrossel');
const track2 = document.getElementById('carrossel2');
let initialPosition = null;
let moving = false;
let transform = 0;
let lastPageX = 0;

const gestureStart = (e) => {
  initialPosition = e.pageX;
  moving = true;
  const transformMatrix = window.getComputedStyle(track).getPropertyValue('transform');
  if (transformMatrix !== 'none') {
    transform = parseInt(transformMatrix.split(',')[4].trim());
  }
}

const gestureMove = (e) => {
  if (moving) {
    const currentPosition = e.pageX;
    const diff = currentPosition - initialPosition;
    if (e.pageX - lastPageX > 0) {
      if (transform > 0) {
        return;
      }
    }
    track.style.transform = `translateX(${transform + diff}px)`;
  }
  lastPageX = e.pageX;
}

const gestureEnd = (e) => {
  const currentPosition = e.pageX;
  const diff = currentPosition - initialPosition;
  console.log(e.pageX);
  if (diff > 0) {
    track.style.transform = `translateX(0px)`;
  }
  
  moving = false;
}

if (window.PointerEvent) {
  track.addEventListener('pointerdown', gestureStart);
  track.addEventListener('pointermove', gestureMove);
  track.addEventListener('pointerup', gestureEnd);
} else {
  track.addEventListener('touchstart', gestureStart);
  track.addEventListener('touchmove', gestureMove);
  track.addEventListener('touchend', gestureEnd);

  track.addEventListener('mousedown', gestureStart);
  track.addEventListener('mousemove', gestureMove);
  track.addEventListener('mouseup', gestureEnd);
}
if (window.PointerEvent) {
  track2.addEventListener('pointerdown', gestureStart);
  track2.addEventListener('pointermove', gestureMove);
  track2.addEventListener('pointerup', gestureEnd);
} else {
  track2.addEventListener('touchstart', gestureStart);
  track2.addEventListener('touchmove', gestureMove);
  track2.addEventListener('touchend', gestureEnd);

  track2.addEventListener('mousedown', gestureStart);
  track2.addEventListener('mousemove', gestureMove);
  track2.addEventListener('mouseup', gestureEnd);
}




