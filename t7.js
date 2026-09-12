
function openHiddenSurprises(){
  const room=document.getElementById("hiddenSurprisesRoom");
  if(!room) return;
  room.classList.add("show");
  document.body.style.overflow="hidden";
}
function closeHiddenSurprises(){
  document.querySelectorAll(".hidden-surprise-modal.show").forEach(function(m){m.classList.remove("show");});
  const room=document.getElementById("hiddenSurprisesRoom");
  if(room) room.classList.remove("show");
  document.body.style.overflow="hidden";
}
function openHiddenSurprise(index){
  const modal=document.getElementById("hiddenSurprise"+index);
  if(!modal) return;
  modal.classList.add("show");
  document.body.style.overflow="hidden";
}
function closeHiddenSurprise(index){
  const modal=document.getElementById("hiddenSurprise"+index);
  if(!modal) return;
  modal.classList.remove("show");
  document.body.style.overflow="hidden";
}
