document.addEventListener('DOMContentLoaded', () => {

  /* prevent duplicate */
  if (document.getElementById('floatingBackButton')) {
    return;
  }

  const button = document.createElement('a');

  button.id = 'floatingBackButton';
  button.href = 'index.html#products';
  button.setAttribute('aria-label', 'Back to Products');
  button.textContent = '←';

  Object.assign(button.style, {
    position: 'fixed',
    left: '18px',
    bottom: '24px',

    width: '42px',
    height: '42px',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    background: '#07352c',
    color: '#ffffff',

    border: '1px solid rgba(255,255,255,.35)',
    borderRadius: '50%',

    fontSize: '20px',
    fontWeight: '700',
    lineHeight: '1',
    textDecoration: 'none',

    boxShadow: '0 6px 20px rgba(0,0,0,.22)',

    zIndex: '2147483647',
    opacity: '1',
    visibility: 'visible'
  });

  document.body.appendChild(button);

});
