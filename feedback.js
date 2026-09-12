document.addEventListener('DOMContentLoaded', () => {

  const button = document.getElementById('feedbackOpen');
  const modal = document.getElementById('feedbackModal');
  const close = document.getElementById('feedbackClose');

  if (!button || !modal) return;

  button.addEventListener('click', () => {
    modal.classList.add('open');
  });

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
