document.addEventListener('DOMContentLoaded', function () {
  const openBtn = document.getElementById('openBtn');
  const closeBtn = document.getElementById('closeBtn');
  const envelope = document.getElementById('envelope');
  const paper = document.getElementById('paper');
  const music = document.getElementById('bg-music');

  openBtn.addEventListener('click', async () => {
    envelope.classList.add('open');
    paper.setAttribute('aria-hidden', 'false');

    try {
      music.currentTime = 36;  // empieza en el segundo 36
      music.volume = 0.3;
      await music.play();
      console.log("🎵 Sonando");
    } catch (e) {
      console.log("Audio bloqueado:", e);
      alert("Tu navegador bloqueó el audio. Tocá la pantalla y apretá Abrir de nuevo.");
    }

    setTimeout(() => closeBtn.focus(), 600);
  });

  closeBtn.addEventListener('click', () => {
    envelope.classList.remove('open');
    paper.setAttribute('aria-hidden', 'true');
    setTimeout(() => openBtn.focus(), 300);
  });

  openBtn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') openBtn.click();
  });
  closeBtn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') closeBtn.click();
  });
});
