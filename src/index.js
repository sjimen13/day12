const pressed = [];
const secredCode = 'santi';

window.addEventListener('keyup', (e) => {
  pressed.push(e.key);
  pressed.splice(-secredCode.length - 1, pressed.length - secredCode.length);
  if (pressed.join('').includes(secredCode)) {
    alert('DING DING !!!');
  }
});
