
function openMemoryGame(){
  const room=document.getElementById("memoryGameRoom");
  if(!room) return;
  room.classList.add("show");
  document.body.style.overflow="hidden";
  resetMemoryGame();
}
function closeMemoryGame(){
  const room=document.getElementById("memoryGameRoom");
  if(!room) return;
  room.classList.remove("show");
  document.body.style.overflow="hidden";
}
