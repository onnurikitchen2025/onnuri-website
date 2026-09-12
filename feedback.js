document.addEventListener('DOMContentLoaded', () => {

  const feedbackOpen =
    document.getElementById('feedbackOpen');

  const feedbackModal =
    document.getElementById('feedbackModal');

  const feedbackClose =
    document.getElementById('feedbackClose');

  if(!feedbackOpen || !feedbackModal){
    return;
  }

  /* =========================
     OPEN / CLOSE MODAL
  ========================= */

  feedbackOpen.addEventListener('click', () => {
    feedbackModal.classList.add('open');
  });

  if(feedbackClose){
    feedbackClose.addEventListener('click', () => {
      feedbackModal.classList.remove('open');
    });
  }

  feedbackModal.addEventListener('click', e => {

    if(e.target === feedbackModal){
      feedbackModal.classList.remove('open');
    }

  });


  /* =========================
     DRAGGABLE FLOATING BUTTON
  ========================= */

  let isDragging = false;
  let moved = false;

  let startX = 0;
  let startY = 0;

  let startLeft = 0;
  let startTop = 0;

  function startDrag(clientX, clientY){

    const rect =
      feedbackOpen.getBoundingClientRect();

    isDragging = true;
    moved = false;

    startX = clientX;
    startY = clientY;

    startLeft = rect.left;
    startTop = rect.top;

    feedbackOpen.style.right = 'auto';
    feedbackOpen.style.bottom = 'auto';

  }

  function moveDrag(clientX, clientY){

    if(!isDragging) return;

    const dx = clientX - startX;
    const dy = clientY - startY;

    if(
      Math.abs(dx) > 4 ||
      Math.abs(dy) > 4
    ){
      moved = true;
    }

    let newLeft =
      startLeft + dx;

    let newTop =
      startTop + dy;

    const buttonWidth =
      feedbackOpen.offsetWidth;

    const buttonHeight =
      feedbackOpen.offsetHeight;

    const maxLeft =
      window.innerWidth -
      buttonWidth -
      8;

    const maxTop =
      window.innerHeight -
      buttonHeight -
      8;

    newLeft =
      Math.max(
        8,
        Math.min(newLeft, maxLeft)
      );

    newTop =
      Math.max(
        8,
        Math.min(newTop, maxTop)
      );

    feedbackOpen.style.left =
      newLeft + 'px';

    feedbackOpen.style.top =
      newTop + 'px';

  }

  function endDrag(){

    if(!isDragging) return;

    isDragging = false;

    const rect =
      feedbackOpen.getBoundingClientRect();

    localStorage.setItem(
      'onnuriFeedbackPosition',
      JSON.stringify({
        left: rect.left,
        top: rect.top
      })
    );

  }


  /* MOUSE */

  feedbackOpen.addEventListener(
    'mousedown',
    e => {

      startDrag(
        e.clientX,
        e.clientY
      );

      e.preventDefault();

    }
  );

  document.addEventListener(
    'mousemove',
    e => {

      moveDrag(
        e.clientX,
        e.clientY
      );

    }
  );

  document.addEventListener(
    'mouseup',
    endDrag
  );


  /* TOUCH */

  feedbackOpen.addEventListener(
    'touchstart',
    e => {

      const touch =
        e.touches[0];

      startDrag(
        touch.clientX,
        touch.clientY
      );

    },
    { passive:true }
  );

  document.addEventListener(
    'touchmove',
    e => {

      if(!isDragging) return;

      const touch =
        e.touches[0];

      moveDrag(
        touch.clientX,
        touch.clientY
      );

    },
    { passive:false }
  );

  document.addEventListener(
    'touchend',
    endDrag
  );


  /* Prevent modal opening after drag */

  feedbackOpen.addEventListener(
    'click',
    e => {

      if(moved){

        e.preventDefault();
        e.stopImmediatePropagation();

        moved = false;

      }

    },
    true
  );


  /* =========================
     RESTORE SAVED POSITION
  ========================= */

  const savedPosition =
    localStorage.getItem(
      'onnuriFeedbackPosition'
    );

  if(savedPosition){

    try{

      const position =
        JSON.parse(savedPosition);

      feedbackOpen.style.right =
        'auto';

      feedbackOpen.style.bottom =
        'auto';

      feedbackOpen.style.left =
        position.left + 'px';

      feedbackOpen.style.top =
        position.top + 'px';

    }catch(e){}

  }

});
