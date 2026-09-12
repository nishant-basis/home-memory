
function openPlacesMenu(){
  const menu = document.getElementById("placesMenu");
  if (menu) menu.classList.add("show");
}
function closePlacesMenu(e){
  if (e && e.target !== e.currentTarget) return;
  const menu = document.getElementById("placesMenu");
  if (menu) menu.classList.remove("show");
}

function openGoa2(){
  const home = document.getElementById("home");
  const room = document.getElementById("goaRoom2");
  if (home) home.style.display = "none";
  if (room) {
    room.classList.add("show");
    room.scrollTop = 0;
  }
  document.body.style.overflow = "hidden";
}
function closeGoa2(){
  const room = document.getElementById("goaRoom2");
  const detail = document.getElementById("goaDetail2");
  const home = document.getElementById("home");
  if (detail) detail.classList.remove("show");
  if (room) room.classList.remove("show");
  if (home) home.style.display = "block";
  document.body.style.overflow = "auto";
  window.scrollTo({top:0, behavior:"instant"});
}

const goaDetails2 = [["The Annual Tradition", "Goa had quietly become something of our own.<br><br><br><br>After the first trip, we decided that we should come back at least once every year. August is my birthday, September is yours, but the actual dates belong with our families — so, naturally, we invented our own date somewhere in the middle. 😂<br><br><br><br>And that's how Goa became our little birthday tradition.<br><br><br><br>We weren't celebrating on a date that mattered to the calendar.<br><br><br><br>We were celebrating on a date that mattered to us."], ["This Time, You Planned", "After our first Goa trip, we had learned something important:<br><br><br><br>We were probably better planners than MMT. 😂<br><br><br><br>And because you already knew that I would look at every hotel, restaurant and plan through one very important filter — \"how much?\" — you took the planning into your own hands this time.<br><br><br><br>You planned the trip using everything we had learned from Goa I.<br><br><br><br>I mostly just participated, checked prices and pretended I was helping.<br><br><br><br>And honestly, I loved seeing you take charge of our little escape."], ["North Goa, Again", "This time we kept things simple.<br><br><br><br>It was a short trip, so we stayed in North Goa at Holitel — close to the beach and genuinely wonderful.<br><br><br><br>We went around Calangute and Vagator, found our way back to places that already felt familiar, and let Goa be Goa.<br><br><br><br>There was no pressure to cover everything.<br><br><br><br>No giant checklist.<br><br><br><br>Just us, the beach, the heat, the chaos and a few places that had slowly become part of our own Goa map."], ["The Goa That Came With Work", "This Goa came with something our first one didn't: work stress.<br><br><br><br>It was hot. Chaotic. Some of our old favourite places weren't serving food like they used to. And, worst of all, Europe was waiting right after the trip.<br><br><br><br>Passport submissions. Forex card arrangements. MO raising. Interview sections. Last-minute information. Incomplete information. And a project lead who somehow managed to make everything more complicated.<br><br><br><br>You were carrying so much in your head that eventually it started spilling into us.<br><br><br><br>So yes, we fought.<br><br><br><br>Then we sorted it.<br><br><br><br>Because apparently that's another one of our traditions."], ["We Can Fight About Anything", "There is genuinely no subject too small for us to fight about.<br><br><br><br>One of my personal favourites from this trip was the document that was at your house and you asked your brother to scan.<br><br><br><br>Does that make any sense as a reason to fight?<br><br><br><br>Absolutely not.<br><br><br><br>Did we somehow turn it into a fight anyway?<br><br><br><br>Obviously. 😂<br><br><br><br>That's us.<br><br><br><br>We can take the smallest, most meaningless thing in the world and turn it into a full argument.<br><br><br><br>And then, somehow, five minutes later, we're completely fine again.<br><br><br><br>Our fights are rarely really about the thing we're fighting about.<br><br><br><br>They're just two stubborn people who care way too much."], ["The Pasta Peace Treaty", "We had fought.<br><br><br><br>So naturally, we went to our pasta place.<br><br><br><br>By now we were regular enough that the waiters had started recognizing us.<br><br><br><br>Another couple sitting opposite us apparently noticed the fight too. We were ordering separate things, sitting there with our serious faces, making it very clear that peace negotiations were nowhere close.<br><br><br><br>Then the food arrived.<br><br><br><br>A forkful of pasta came towards me.<br><br><br><br>I refused.<br><br><br><br>You scolded me.<br><br><br><br>I ate it.<br><br><br><br>And just like that, the war was over.<br><br><br><br>One second we were fighting. The next, we were being romantic again while the older couple across from us laughed at the entire performance. 😂<br><br><br><br>Apparently, pasta is our version of couples therapy."], ["Your Aura", "This was one of those completely random moments that should mean absolutely nothing — and somehow became a memory.<br><br><br><br>We went into a shop together to buy something. I stepped outside to get the car.<br><br><br><br>The shopkeeper looked at you and asked:<br><br><br><br>\"Madam, stuff chahiye kya?\"<br><br><br><br>We both burst out laughing.<br><br><br><br>Because apparently your aura says, \"I definitely know where to get the stuff.\"<br><br><br><br>And me?<br><br><br><br>Apparently I look like a milk-drinking innocent boy. 😂<br><br><br><br>It was completely stupid.<br><br><br><br>Which is probably why we remember it."], ["The Airport Fight", "Even the ending had to be dramatic.<br><br><br><br>We started fighting at the airport.<br><br><br><br>You threw your boarding pass.<br><br><br><br>You hadn't eaten.<br><br><br><br>My sugar was dropping on the plane.<br><br><br><br>Basically, the grand finale was going exactly as expected.<br><br><br><br>And then, while still completely angry, you put chocolate into my mouth.<br><br><br><br>Not because the fight was over.<br><br><br><br>Not because you had suddenly become romantic.<br><br><br><br>Just because, even while angry with me, you still knew I needed to eat.<br><br><br><br>Honestly, nothing could have been more romantic at that moment.<br><br><br><br>And by the time the plane landed...<br><br><br><br>we were love birds again. ❤️<br><br><br><br>That's probably the best way to describe us.<br><br><br><br>Chaos first.<br><br><br><br>Love immediately after."]];

function openGoaDetail2(index){
  const x = goaDetails2[index];
  const modal = document.getElementById("goaDetail2");
  const title = document.getElementById("goaDetailTitle2");
  const body = document.getElementById("goaDetailBody2");

  if (!x || !modal || !title || !body) return;

  title.textContent = x[0];
  body.innerHTML = "<p>" + x[1] + "</p>";

  /* Use both the tested class mechanism and an explicit fallback. */
  modal.classList.add("show");
  modal.style.opacity = "1";
  modal.style.visibility = "visible";
  modal.style.pointerEvents = "auto";
  document.body.style.overflow = "hidden";
}

function closeGoaDetail2(e){
  if (e && e.target !== e.currentTarget && !e.target.classList.contains("goa-detail-close")) return;

  const modal = document.getElementById("goaDetail2");
  if (!modal) return;

  modal.classList.remove("show");
  modal.style.opacity = "";
  modal.style.visibility = "";
  modal.style.pointerEvents = "";
  document.body.style.overflow = "hidden";
}

/* GOA AGAIN: bind the cards directly as a second layer of protection.
   This makes the cards work even if an inline onclick is altered by the browser. */
document.addEventListener("DOMContentLoaded", function(){
  const room = document.getElementById("goaRoom2");
  if (!room) return;

  room.querySelectorAll(".goa-card").forEach(function(card, index){
    card.style.cursor = "pointer";
    card.addEventListener("click", function(e){
      e.preventDefault();
      e.stopPropagation();
      openGoaDetail2(index);
    });
  });
});


function openPlacesRoom(){
  const home=document.getElementById("home");
  const room=document.getElementById("placesRoom");
  if(home) home.style.display="none";
  if(room){
    room.classList.add("show");
    room.scrollTop=0;
  }
  document.body.style.overflow="hidden";
}
function closePlacesRoom(){
  const places=document.getElementById("placesRoom");
  const goa=document.getElementById("goaRoom");
  const goa2=document.getElementById("goaRoom2");
  const home=document.getElementById("home");
  if(places) places.classList.remove("show");
  if(goa) goa.classList.remove("show");
  if(goa2) goa2.classList.remove("show");
  if(home) home.style.display="block";
  document.body.style.overflow="auto";
  window.scrollTo({top:0,behavior:"instant"});
}


function closeGoaToPlaces(){
  const room=document.getElementById("goaRoom");
  const detail=document.getElementById("goaDetail");
  const places=document.getElementById("placesRoom");
  if(detail) detail.classList.remove("show");
  if(room) room.classList.remove("show");
  if(places) places.classList.add("show");
  document.body.style.overflow="hidden";
}

