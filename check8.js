
/* OUR STORY — integrated chapter navigation */
function hideAllStoryChapters(){
  const ids=['storyRoom','storyChapter2','storyChapter3','storyChapter4','storyChapter5'];
  ids.forEach(function(id){
    const el=document.getElementById(id);
    if(el) el.classList.remove('show');
  });
}
function openStoryChapter(n){
  const home=document.getElementById('home');
  hideAllStoryChapters();
  if(home) home.style.display='none';
  const target=document.getElementById('storyChapter'+n);
  if(target){
    target.classList.add('show');
    target.scrollTop=0;
    window.scrollTo({top:0,behavior:'instant'});
  }
  document.body.style.overflow='hidden';
}
function backToChapter1(){
  hideAllStoryChapters();
  const s=document.getElementById('storyRoom');
  if(s){s.classList.add('show');s.scrollTop=0;}
  document.body.style.overflow='auto';
  window.scrollTo({top:0,behavior:'instant'});
}
function backToChapter2(){
  openStoryChapter(2);
}
function backToChapter3(){
  openStoryChapter(3);
}
function backToChapter4(){
  openStoryChapter(4);
}
