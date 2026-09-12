
/* =========================
   BIRTHDAY COUNTDOWN + REVEAL
========================= */
(function(){
  const target = new Date('2026-09-24T12:59:59+05:30').getTime();
  function updateBirthdayCountdown(){
    const diff = Math.max(0, target - Date.now());
    const total = Math.floor(diff/1000);
    const days = Math.floor(total/86400);
    const hours = Math.floor((total%86400)/3600);
    const minutes = Math.floor((total%3600)/60);
    const seconds = total%60;
    const set=(id,v)=>{const e=document.getElementById(id);if(e)e.textContent=String(v).padStart(2,'0');};
    set('bdDays',days); set('bdHours',hours); set('bdMinutes',minutes); set('bdSeconds',seconds);
  }
  updateBirthdayCountdown();
  setInterval(updateBirthdayCountdown,1000);
})();

let birthdayMusicCtx=null, birthdayMusicTimer=null, birthdayMusicPlaying=false;
function playBirthdayNote(freq,start,duration,volume){
  if(!birthdayMusicCtx) return;
  const osc=birthdayMusicCtx.createOscillator();
  const gain=birthdayMusicCtx.createGain();
  osc.type='sine'; osc.frequency.value=freq;
  gain.gain.setValueAtTime(0.0001,start);
  gain.gain.exponentialRampToValueAtTime(volume,start+0.025);
  gain.gain.exponentialRampToValueAtTime(0.0001,start+duration);
  osc.connect(gain); gain.connect(birthdayMusicCtx.destination);
  osc.start(start); osc.stop(start+duration+0.03);
}
function startBirthdayMusic(){
  if(birthdayMusicPlaying) return;
  const AC=window.AudioContext||window.webkitAudioContext;
  if(!AC) return;
  birthdayMusicCtx=birthdayMusicCtx||new AC();
  birthdayMusicCtx.resume();
  birthdayMusicPlaying=true;
  const melody=[523.25,659.25,783.99,659.25,587.33,698.46,880,698.46,523.25,659.25,783.99,1046.5];
  let i=0;
  const loop=()=>{
    if(!birthdayMusicPlaying) return;
    const now=birthdayMusicCtx.currentTime;
    melody.forEach((f,n)=>playBirthdayNote(f,now+n*.38,.42,.035));
    birthdayMusicTimer=setTimeout(loop,melody.length*380+650);
  };
  loop();
  const b=document.getElementById('birthdayMusicToggle'); if(b)b.textContent='♫';
}
function stopBirthdayMusic(){
  birthdayMusicPlaying=false;
  if(birthdayMusicTimer) clearTimeout(birthdayMusicTimer);
  const b=document.getElementById('birthdayMusicToggle'); if(b)b.textContent='♪';
}
function toggleBirthdayMusic(){ birthdayMusicPlaying ? stopBirthdayMusic() : startBirthdayMusic(); }
function createBirthdayConfetti(){
  const box=document.getElementById('birthdayConfetti'); if(!box)return;
  box.innerHTML='';
  const pieces=72;
  for(let i=0;i<pieces;i++){
    const el=document.createElement('span'); el.className='confetti-piece';
    el.style.left=(Math.random()*100)+'%';
    el.style.animationDuration=(4.5+Math.random()*4)+'s';
    el.style.animationDelay=(Math.random()*1.2)+'s';
    el.style.setProperty('--drift',((Math.random()-.5)*220)+'px');
    const colors=['#e8b7a7','#f2d3a4','#f7e7c9','#c9817e','#b89b75','#ffffff'];
    el.style.background=colors[Math.floor(Math.random()*colors.length)];
    box.appendChild(el);
  }
}
function openBirthdayReveal(){
  const r=document.getElementById('birthdayReveal'); if(!r)return;
  r.classList.add('show'); r.setAttribute('aria-hidden','false');
  document.body.style.overflow='hidden';
  createBirthdayConfetti();
  startBirthdayMusic();
}
function closeBirthdayReveal(){
  const r=document.getElementById('birthdayReveal'); if(!r)return;
  r.classList.remove('show'); r.setAttribute('aria-hidden','true');
  stopBirthdayMusic();
  document.body.style.overflow='auto';
}
function enterBirthdayHome(){ closeBirthdayReveal(); }
