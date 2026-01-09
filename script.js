document.addEventListener('DOMContentLoaded', function () {
  const openBtn = document.getElementById('openBtn');
  const closeBtn = document.getElementById('closeBtn');
  const envelope = document.getElementById('envelope');
  const paper = document.getElementById('paper');
  const music = document.getElementById('bg-music');

  openBtn.addEventListener('click', () => {
    envelope.classList.add('open');
    paper.setAttribute('aria-hidden', 'false');

    // 🎵 música desde el segundo 36
    music.currentTime = 36;
    music.volume = 0.3;
    music.play();

    setTimeout(() => {
      closeBtn.focus();
    }, 600);
  });

  closeBtn.addEventListener('click', () => {
    envelope.classList.remove('open');
    paper.setAttribute('aria-hidden', 'true');

    setTimeout(() => {
      openBtn.focus();
    }, 300);
  });

  // permitir Enter / Espacio
  openBtn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') openBtn.click();
  });

  closeBtn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') closeBtn.click();
  });
});
