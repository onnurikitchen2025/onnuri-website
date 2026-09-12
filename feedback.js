document.addEventListener('DOMContentLoaded', () => {

  const button = document.getElementById('feedbackOpen');
  const modal = document.getElementById('feedbackModal');
  const close = document.getElementById('feedbackClose');

  if (!button || !modal) return;

  let dragging = false;
  let moved = false;

  let startX = 0;
  let startY = 0;
  let startLeft = 0;
  let startTop = 0;


  /* OPEN POPUP */

  button.addEventListener('click', () => {

    if (moved) {
      moved = false;
      return;
    }

    modal.classList.add('open');

  });


  /* CLOSE POPUP */

  if (close) {
    close.addEventListener('click', () => {
      modal.classList.remove('open');
    });
  }

  modal.addEventListener('click', (e) => {

    if (e.target === modal) {
      modal.classList.remove('open');
    }

  });


  /* START DRAG */

  function startDrag(x, y) {

  const rect = button.getBoundingClientRect();

  dragging = true;
  moved = false;

  startX = x;
  startY = y;

  startLeft = rect.left;
  startTop = rect.top;

  /* keep current position before removing right/bottom */

  button.style.left = rect.left + 'px';
  button.style.top = rect.top + 'px';

  button.style.right = 'auto';
  button.style.bottom = 'auto';

}

  /* MOVE */

  function moveDrag(x, y) {

    if (!dragging) return;

    const dx = x - startX;
    const dy = y - startY;

    if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
      moved = true;
    }

    let left = startLeft + dx;
    let top = startTop + dy;

    const maxLeft =
      window.innerWidth - button.offsetWidth - 8;

    const maxTop =
      window.innerHeight - button.offsetHeight - 8;

    left = Math.max(8, Math.min(left, maxLeft));
    top = Math.max(8, Math.min(top, maxTop));

    button.style.left = left + 'px';
    button.style.top = top + 'px';

  }


  /* END DRAG */

  function endDrag() {

    if (!dragging) return;

    dragging = false;

    const rect = button.getBoundingClientRect();

    localStorage.setItem(
      'onnuriFeedbackPosition',
      JSON.stringify({
        left: rect.left,
        top: rect.top
      })
    );

  }


  /* DESKTOP */

  button.addEventListener('mousedown', (e) => {

    startDrag(e.clientX, e.clientY);

    e.preventDefault();

  });

  document.addEventListener('mousemove', (e) => {
    moveDrag(e.clientX, e.clientY);
  });

  document.addEventListener('mouseup', endDrag);


  /* MOBILE */

  button.addEventListener('touchstart', (e) => {

    const touch = e.touches[0];

    startDrag(
      touch.clientX,
      touch.clientY
    );

  }, { passive: true });


  document.addEventListener('touchmove', (e) => {

    if (!dragging) return;

    const touch = e.touches[0];

    moveDrag(
      touch.clientX,
      touch.clientY
    );

    e.preventDefault();

  }, { passive: false });


  document.addEventListener('touchend', endDrag);


  /* RESTORE LAST POSITION */

  const saved =
    localStorage.getItem('onnuriFeedbackPosition');

  if (saved) {

    try {

      const position = JSON.parse(saved);

      button.style.right = 'auto';
      button.style.bottom = 'auto';

      button.style.left = position.left + 'px';
      button.style.top = position.top + 'px';

    } catch (error) {}

  }

});
