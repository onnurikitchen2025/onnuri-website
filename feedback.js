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


  /* =========================
     POINTER DOWN
  ========================= */

  button.addEventListener('pointerdown', (e) => {

    const rect = button.getBoundingClientRect();

    dragging = true;
    moved = false;

    startX = e.clientX;
    startY = e.clientY;

    startLeft = rect.left;
    startTop = rect.top;

    button.setPointerCapture(e.pointerId);

  });


  /* =========================
     DRAG
  ========================= */

  button.addEventListener('pointermove', (e) => {

    if (!dragging) return;

    const dx = e.clientX - startX;
    const dy = e.clientY - startY;

    if (
      Math.abs(dx) > 6 ||
      Math.abs(dy) > 6
    ) {
      moved = true;
    }

    if (!moved) return;


    let left = startLeft + dx;
    let top = startTop + dy;

    const maxLeft =
      window.innerWidth -
      button.offsetWidth -
      8;

    const maxTop =
      window.innerHeight -
      button.offsetHeight -
      8;


    left =
      Math.max(
        8,
        Math.min(left, maxLeft)
      );

    top =
      Math.max(
        8,
        Math.min(top, maxTop)
      );


    button.style.right = 'auto';
    button.style.bottom = 'auto';

    button.style.left =
      left + 'px';

    button.style.top =
      top + 'px';

  });


  /* =========================
     CLICK OR END DRAG
  ========================= */

  button.addEventListener('pointerup', (e) => {

    if (!dragging) return;

    dragging = false;


    if (moved) {

      const rect =
        button.getBoundingClientRect();

      localStorage.setItem(
        'onnuriFeedbackPosition',
        JSON.stringify({
          left: rect.left,
          top: rect.top
        })
      );

    } else {

      modal.classList.add('open');

    }


    try {
      button.releasePointerCapture(
        e.pointerId
      );
    } catch (error) {}

  });


  /* =========================
     CLOSE MODAL
  ========================= */

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


  /* ESC KEY */

  document.addEventListener('keydown', (e) => {

    if (e.key === 'Escape') {

      modal.classList.remove('open');

    }

  });


  /* =========================
     RESTORE POSITION
  ========================= */

  const saved =
    localStorage.getItem(
      'onnuriFeedbackPosition'
    );


  if (saved) {

    try {

      const position =
        JSON.parse(saved);


      const maxLeft =
        window.innerWidth -
        button.offsetWidth -
        8;

      const maxTop =
        window.innerHeight -
        button.offsetHeight -
        8;


      const safeLeft =
        Math.max(
          8,
          Math.min(
            position.left,
            maxLeft
          )
        );


      const safeTop =
        Math.max(
          8,
          Math.min(
            position.top,
            maxTop
          )
        );


      button.style.right = 'auto';
      button.style.bottom = 'auto';

      button.style.left =
        safeLeft + 'px';

      button.style.top =
        safeTop + 'px';


    } catch (error) {

      localStorage.removeItem(
        'onnuriFeedbackPosition'
      );

    }

  }

});
