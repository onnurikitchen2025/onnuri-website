document.addEventListener('DOMContentLoaded', () => {

  if (document.getElementById('floatingBackButton')) return;

  const button = document.createElement('a');

  button.id = 'floatingBackButton';
  button.href = 'index.html#products';
  button.setAttribute('aria-label', 'Back to Products');
  button.textContent = '←';

  Object.assign(button.style, {
    position: 'fixed',
    left: '18px',

    width: '42px',
    height: '42px',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    background: '#07352c',
    color: '#ffffff',

    border: '1px solid rgba(255,255,255,.35)',
    borderRadius: '6px',

    fontSize: '20px',
    fontWeight: '700',
    textDecoration: 'none',

    boxShadow: '0 6px 20px rgba(0,0,0,.22)',
    zIndex: '2147483647'
  });

  document.body.appendChild(button);


  /* KEEP BUTTON INSIDE ANY SCREEN SIZE */

  function positionBackButton(){

    const viewportHeight =
      window.visualViewport
        ? window.visualViewport.height
        : window.innerHeight;

    button.style.top =
      Math.max(16, viewportHeight - 66) + 'px';

    button.style.bottom = 'auto';

  }

  positionBackButton();

  window.addEventListener(
    'resize',
    positionBackButton
  );

  if(window.visualViewport){

    window.visualViewport.addEventListener(
      'resize',
      positionBackButton
    );

  }

});
