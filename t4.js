

window.openPlacesRoom = function(){
  var h=document.getElementById('home');
  var p=document.getElementById('placesRoom');
  var g=document.getElementById('goaRoom');
  var g2=document.getElementById('goaRoom2');
  if(h) h.style.display='none';
  if(g) g.classList.remove('show');
  if(g2) g2.classList.remove('show');
  if(p) p.classList.add('show');
  document.body.style.overflow='hidden';
};

