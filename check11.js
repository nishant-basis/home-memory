
(function(){
  const ROOM_KEY='homeExperienceVisitedV1';
  const SECRET_KEY='homeSecretsV2';
  const roomNames={story:'Our Story',places:'Our Places',little:'Our Little Things',museum:'The Museum',miss:'When I Miss You',magic:'Little Magic'};
  const whispers={
    0:'Some memories are meant to be discovered slowly. <em>♡</em>',
    1:'Okay. You found your way in. <em>Now snoop.</em>',
    2:'You know where this started. <em>But not everything is here yet.</em>',
    3:'Three rooms in. <em>You are officially curious.</em>',
    4:'Halfway through HOME. <em>I hope you are smiling.</em>',
    5:'You are collecting pieces of us now. <em>♡</em>',
    6:'You found almost everything. <em>Almost.</em>'
  };
  const secrets={
    spark:{k:'You found the tiny secret',t:'Not everything needs a room.',p:'Some things are better left tucked into the corners — like this little reminder: I put a lot of you into HOME. More than you probably realise. ♡'},
    story:{k:'A memory hiding in the story',t:'The Very Important Question',p:'You know what still makes me laugh? I wanted to know who you were. And instead of asking you... I asked your friend. You were standing right there. Smooth move, Nishant. ♡'},
    places:{k:'A little Goa secret',t:'Goa became ours.',p:'One trip was never going to be enough. Somewhere between Varka, Tito’s, LPK, coconut water, bad planning and “No Chinta. No Fikr.” Goa stopped being a place. It became ours. 🌴❤️'},
    little:{k:'A little thing that became a lot',t:'Our storytellers',p:'These two took months to find. And somehow, they became more than two little toys. They became witnesses — to our stupid conversations, our fights, our laughter, our home. Some things are worth waiting for. ❤️'},
    museum:{k:'ARCHIVED MEMORY #05',t:'The Denial',p:'“Sorry aunty. I don’t know who?” Still pretending. Evidence: inconclusive. Witnesses: us. Likelihood of getting away with it: 0%. 😂'},
    magic:{k:'The stars were not the end',t:'You found all seven.',p:'You always notice the little things. I knew you would find every star eventually. Secret #6 belongs to you. ♡'},
    complete:{k:'HOME · ONE LAST THING',t:'You found almost everything.',p:'There was one thing I couldn’t put inside a room. Because it isn’t a memory. It’s what I want next. ❤️\n\nUS.\n\nNot another chapter. Not another trip. Not another photograph. Just more mornings. More coffee. More fights we eventually laugh about. More places. More stupid conversations. More “good nights.” More us.\n\nThe story isn’t finished. It never was. ❤️'}
  };
  function loadRooms(){try{return JSON.parse(localStorage.getItem(ROOM_KEY)||'[]')}catch(e){return []}}
  function loadSecrets(){try{return JSON.parse(localStorage.getItem(SECRET_KEY)||'[]')}catch(e){return []}}
  function saveSecrets(a){try{localStorage.setItem(SECRET_KEY,JSON.stringify(a))}catch(e){}}
  function updateExperience(a){
    document.querySelectorAll('.room-card').forEach(c=>c.classList.remove('room-visited'));
    const map={story:0,places:1,little:2,museum:3,miss:4,magic:5}; const cards=document.querySelectorAll('.room-card');
    Object.keys(map).forEach(id=>{if(a.includes(id)&&cards[map[id]])cards[map[id]].classList.add('room-visited')});
    const whisper=document.getElementById('homeWhisper'); if(whisper)whisper.innerHTML=whispers[Math.min(a.length,6)];
  }
  window.markHomeRoom=function(id){const a=loadRooms();if(!a.includes(id)){a.push(id);try{localStorage.setItem(ROOM_KEY,JSON.stringify(a))}catch(e){}}updateExperience(a)};
  function refreshSecrets(){
    const a=loadSecrets(), n=a.length, badge=document.getElementById('discoveryBadge'), dc=document.getElementById('discoveryCount'), whisper=document.getElementById('homeWhisper');
    if(dc)dc.textContent=n+'/7';
    if(badge){badge.classList.toggle('show',n>0); if(n>=6)badge.innerHTML='Something is still missing · <span id="discoveryCount">'+n+'/7</span> · ♡'; else badge.innerHTML='Secrets found · <span id="discoveryCount">'+n+'/7</span>'}
    if(whisper && n>=6)whisper.innerHTML='You found almost everything. <em>Almost.</em>';
  }
  function addSecret(id){const a=loadSecrets();if(!a.includes(id)){a.push(id);saveSecrets(a)}refreshSecrets()}
  function resetHomeSecrets(){try{localStorage.removeItem(SECRET_KEY)}catch(e){}refreshSecrets()}
  let activeSecretKind=null;
  window.openHomeSecret=function(kind){
    if(kind==='complete' && loadSecrets().length<6)return;
    activeSecretKind=kind;
    const data=secrets[kind]||secrets.spark,m=document.getElementById('homeSecretModal');if(!m)return;
    /* Keep the secret dialog above every room, including Little Things. */
    if(m.parentElement!==document.body) document.body.appendChild(m);
    m.style.position='fixed';
    m.style.inset='0';
    m.style.zIndex='2147483646';
    document.getElementById('homeSecretKicker').textContent=data.k;document.getElementById('homeSecretTitle').textContent=data.t;
    document.getElementById('homeSecretText').innerHTML=data.p.replace(/\n\n/g,'<br><br>').replace(/\n/g,'<br>');
    m.classList.add('show');m.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';
    if(kind!=='complete'){addSecret(kind);if(kind==='spark'){const sp=document.getElementById('secretSpark');if(sp)sp.classList.add('found')}}
    if(kind==='complete')addSecret('final');
  };
  window.closeHomeSecret=function(){
    const m=document.getElementById('homeSecretModal');
    if(m){m.classList.remove('show');m.setAttribute('aria-hidden','true')}
    document.body.style.overflow='auto';
    if(activeSecretKind==='magic' && window.resetMagicDiscovery && magicResetPending){
      window.resetMagicDiscovery();
    }
    /* Completing the full HOME secret hunt is a repeatable experience.
       Once the final message has been read and closed, start the hunt again at 0/7. */
    if(activeSecretKind==='complete'){
      resetHomeSecrets();
      const sp=document.getElementById('secretSpark');
      if(sp)sp.classList.remove('found');
    }
    activeSecretKind=null;
  };
  function clue(cls,id,label){
    if(document.querySelector('.secret-clue.'+cls))return;
    const b=document.createElement('button');b.type='button';b.className='secret-clue '+cls;b.setAttribute('aria-label',label);b.innerHTML='♡';
    b.onclick=function(e){e.preventDefault();e.stopPropagation();openHomeSecret(id)};return b;
  }
  function installClues(){
    const story=document.querySelector('#storyRoom .story-two h2'); if(story&&!story.querySelector('.secret-clue'))story.appendChild(clue('story-secret','story','A tiny secret in the story'));
    const places=document.querySelector('#goaRoom .goa-card:nth-of-type(3)'); if(places&&!places.querySelector('.secret-clue'))places.appendChild(clue('places-secret','places','A tiny Goa secret'));
    const little=document.querySelector('#littleThingsRoom .lt-card[onclick*="openLittleThing(\'dudu\')"]'); if(little&&!little.querySelector('.secret-clue'))little.appendChild(clue('little-secret','little','A tiny secret among the little things'));
    const museum=document.querySelector('#museumRoom .museum-card[onclick="openMuseumItem(30)"]'); if(museum&&!museum.querySelector('.secret-clue'))museum.appendChild(clue('museum-secret','museum','A tiny museum secret'));
  }
  const oldOpenStory=window.openStory,oldOpenPlaces=window.openPlacesRoom,oldOpenLittle=window.openLittleThings,oldOpenMuseum=window.openMuseum,oldOpenMiss=window.openMissYou,oldOpenMagic=window.openMagic;
  if(oldOpenStory)window.openStory=function(){markHomeRoom('story');setTimeout(installClues,30);return oldOpenStory.apply(this,arguments)};
  if(oldOpenPlaces)window.openPlacesRoom=function(){markHomeRoom('places');setTimeout(installClues,30);return oldOpenPlaces.apply(this,arguments)};
  if(oldOpenLittle)window.openLittleThings=function(){markHomeRoom('little');setTimeout(installClues,30);return oldOpenLittle.apply(this,arguments)};
  if(oldOpenMuseum)window.openMuseum=function(){markHomeRoom('museum');setTimeout(installClues,30);return oldOpenMuseum.apply(this,arguments)};
  if(oldOpenMiss)window.openMissYou=function(){markHomeRoom('miss');return oldOpenMiss.apply(this,arguments)};
  if(oldOpenMagic)window.openMagic=function(){markHomeRoom('magic');return oldOpenMagic.apply(this,arguments)};
  document.addEventListener('keydown',function(e){if(e.key==='Escape')closeHomeSecret()});
  document.addEventListener('click',function(e){const m=document.getElementById('homeSecretModal');if(m&&e.target===m)closeHomeSecret()});
  document.addEventListener('DOMContentLoaded',function(){updateExperience(loadRooms());refreshSecrets();installClues();
    const progress=document.getElementById('magicProgress'); if(progress){const obs=new MutationObserver(function(){if((progress.textContent||'').trim()==='7 of 7 discovered'){setTimeout(function(){openHomeSecret('magic')},500)}});obs.observe(progress,{childList:true,characterData:true,subtree:true})}
  });
})();
