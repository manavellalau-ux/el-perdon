document.addEventListener('DOMContentLoaded',function(){
  const openBtn = document.getElementById('openBtn');
  const closeBtn = document.getElementById('closeBtn');
  const envelope = document.getElementById('envelope');
  const paper = document.getElementById('paper');

  openBtn.addEventListener('click',()=>{
    envelope.classList.add('open');
    paper.setAttribute('aria-hidden','false');
    setTimeout(()=>{ closeBtn.focus(); },600);
  });

  closeBtn.addEventListener('click',()=>{
    envelope.classList.remove('open');
    paper.setAttribute('aria-hidden','true');
    setTimeout(()=>{ openBtn.focus(); },300);
  });

  // allow Enter/Space to open when focused
  openBtn.addEventListener('keydown', (e)=>{ if(e.key==='Enter' || e.key===' ') openBtn.click(); });
  closeBtn.addEventListener('keydown', (e)=>{ if(e.key==='Enter' || e.key===' ') closeBtn.click(); });
});

const music = document.getElementById("bg-music");
const openBtn = document.getElementById("openBtn");

openBtn.addEventListener("click", () => {
  music.volume = 0.3; // volumen suave
  music.play();
});
