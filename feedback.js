document.addEventListener('DOMContentLoaded', () => {

  const button = document.getElementById('feedbackOpen');
  const modal = document.getElementById('feedbackModal');
  const close = document.getElementById('feedbackClose');

  if (!button || !modal) return;


  /* =========================
     SAVED POSITION
  ========================= */

  let x = 0;
  let y = 0;

  const saved = localStorage.getItem('onnuriFeedbackDrag');

  if (saved) {
    try {
      const pos = JSON.parse(saved);

      x = Number(pos.x) || 0;
      y = Number(pos.y) || 0;

      button.style.transform =
        `translate(${x}px, ${y}px)`;

    } catch (e) {}
  }


  /* =========================
     DRAG
  ========================= */

  let dragging = false;
  let moved = false;

  let startPointerX = 0;
  let startPointerY = 0;

  let startX = 0;
  let startY = 0;

  let startRect = null;


  button.addEventListener('pointerdown', (e) => {

    if (e.pointerType === 'touch') return;
    
    dragging = true;
    moved = false;

    startPointerX = e.clientX;
    startPointerY = e.clientY;

    startX = x;
    startY = y;

    startRect = button.getBoundingClientRect();

    button.setPointerCapture(e.pointerId);

  });


  button.addEventListener('pointermove', (e) => {

    
    if (e.pointerType === 'touch') return;
    
    if (!dragging) return;

    let dx = e.clientX - startPointerX;
    let dy = e.clientY - startPointerY;


    if (
      Math.abs(dx) > 5 ||
      Math.abs(dy) > 5
    ) {
      moved = true;
    }

    if (!moved) return;


    /* KEEP BUTTON INSIDE SCREEN */

    if (startRect.left + dx < 8) {
      dx = 8 - startRect.left;
    }

    if (startRect.top + dy < 8) {
      dy = 8 - startRect.top;
    }

    if (
      startRect.right + dx >
      window.innerWidth - 8
    ) {
      dx =
        window.innerWidth -
        8 -
        startRect.right;
    }

    if (
      startRect.bottom + dy >
      window.innerHeight - 8
    ) {
      dy =
        window.innerHeight -
        8 -
        startRect.bottom;
    }


    x = startX + dx;
    y = startY + dy;

    button.style.transform =
      `translate(${x}px, ${y}px)`;

  });


  button.addEventListener('pointerup', (e) => {

    if (e.pointerType === 'touch') return;
    
    if (!dragging) return;

    dragging = false;


    /* CLICK = OPEN FEEDBACK */

    if (!moved) {

      modal.classList.add('open');

    }

    /* DRAG = SAVE POSITION */

    else {

      localStorage.setItem(
        'onnuriFeedbackDrag',
        JSON.stringify({ x, y })
      );

    }


    try {
      button.releasePointerCapture(e.pointerId);
    } catch (error) {}

  });


  button.addEventListener('pointercancel', () => {
    dragging = false;
  });

/* =========================
   MOBILE TOUCH DRAG
========================= */

let touchDragging = false;
let touchMoved = false;

let touchStartX = 0;
let touchStartY = 0;

let touchBaseX = 0;
let touchBaseY = 0;

let touchStartRect = null;


button.addEventListener('touchstart', (e) => {

  const touch = e.touches[0];

  touchDragging = true;
  touchMoved = false;

  touchStartX = touch.clientX;
  touchStartY = touch.clientY;

  touchBaseX = x;
  touchBaseY = y;

  touchStartRect =
    button.getBoundingClientRect();

}, { passive:false });


button.addEventListener('touchmove', (e) => {

  if (!touchDragging) return;

  const touch = e.touches[0];

  let dx =
    touch.clientX - touchStartX;

  let dy =
    touch.clientY - touchStartY;


  if (
    Math.abs(dx) > 5 ||
    Math.abs(dy) > 5
  ) {
    touchMoved = true;
  }

  if (!touchMoved) return;


  e.preventDefault();


  /* KEEP INSIDE SCREEN */

  if (touchStartRect.left + dx < 8) {
    dx = 8 - touchStartRect.left;
  }

  if (touchStartRect.top + dy < 8) {
    dy = 8 - touchStartRect.top;
  }

  if (
    touchStartRect.right + dx >
    window.innerWidth - 8
  ) {
    dx =
      window.innerWidth -
      8 -
      touchStartRect.right;
  }

  if (
    touchStartRect.bottom + dy >
    window.innerHeight - 8
  ) {
    dy =
      window.innerHeight -
      8 -
      touchStartRect.bottom;
  }


  x = touchBaseX + dx;
  y = touchBaseY + dy;

  button.style.transform =
    `translate(${x}px, ${y}px)`;

}, { passive:false });


button.addEventListener('touchend', () => {

  if (!touchDragging) return;

  touchDragging = false;


  if (touchMoved) {

    localStorage.setItem(
      'onnuriFeedbackDrag',
      JSON.stringify({ x, y })
    );

  } else {

    modal.classList.add('open');

  }

});
  /* =========================
     CLOSE POPUP
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


  document.addEventListener('keydown', (e) => {

    if (e.key === 'Escape') {
      modal.classList.remove('open');
    }

  });

});
