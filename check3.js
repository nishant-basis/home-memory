

function openGoa(){
  const home = document.getElementById("home");
  const room = document.getElementById("goaRoom");
  if (!room) return;

  if (home) home.style.display = "none";
  room.classList.add("show");
  room.scrollTop = 0;
  document.body.style.overflow = "hidden";
}

function closeGoa(){
  const room = document.getElementById("goaRoom");
  const detail = document.getElementById("goaDetail");
  const home = document.getElementById("home");

  if (detail) detail.classList.remove("show");
  if (room) room.classList.remove("show");
  if (home) home.style.display = "block";

  document.body.style.overflow = "auto";
  window.scrollTo({top: 0, behavior: "instant"});
}

const goaDetails = [["The Plan", "We never really thought we could pull off Goa. We were meeting once a week, sometimes once in fifteen days — talking day and night, but actually staying together for a trip felt almost impossible.<br><br>And then we decided to try.<br><br>MMT handled the package. We handled everything else: the little lies about SAP TechEd, matching the flights with the story we had told our parents, checking every detail twice, and using the PDF editor like our lives depended on it. 😂<br><br>It was ridiculous. It was stressful. And somehow, it was one of the most fun parts of the trip.<br><br><strong>Because before Goa even began, we had already started making the memory.</strong>"], ["Find the Lens Solution", "We checked into the hotel and the rooms weren't ready, so we created a scene and got a penthouse upgrade. Then we rented a car and discovered the real emergency: you had forgotten your lens solution. Before beaches or sightseeing, we called shops all over Goa until we found one."], ["No Chinta. No Fikr.", "We started our days around noon, sunscreen bottles in our hands, wandering with no chinta and no fikr about work or office. You learnt GPS — although the wrong turns may suggest otherwise. 😂 Sometimes GPS took us into jungle, with no roads and both of us wondering how we got there. Somehow those became the best memories."], ["Varka", "The two-hour drive to Varka was worth every minute. Beautiful scenery, a peaceful beach, mostly foreigners, and nobody judging what anyone was wearing. It felt like a different Goa. And I had my first red-sauce pasta."], ["Tito's", "I preferred high-class clubs. You insisted on Tito's. We argued. You won. As usual. 😂 The crowd wasn't our kind, so we did what we do best: bitched about everyone around us. Mascots, people, random dancing and influencers — everyone became a discussion topic. And somehow we had a fantastic time."], ["Ginger", "The South Goa hotel was pathetic, so we changed the plan and came back north to Ginger — our little place. Sometimes the best travel decisions happen because the original plan was terrible."], ["LPK", "That shady, haunted-looking property. We saw it from the parking lot, looked at each other and basically said: Nope. 😂 And left."], ["Delhi Darbar & More", "Our Delhi Darbar lunches and dinners. That uncle singing ghazals. The lavish dinner that wasn't your kind of place. The matching clothes, sunscreen, random stories and wrong turns. So many ordinary things that somehow became ours."], ["Water or Coconut Water?", "On the last day I got ill and the cab was waiting. You brought medicines. Then came the serious debate over coconut water or plain water, plus the shopkeeper who irritated you. Even that chaos became a memory I still remember."]];
function openGoaDetail(i){
  const x = goaDetails[Number(i)];
  if (!x) return;
  document.getElementById('goaDetailTitle').textContent = x[0];
  document.getElementById('goaDetailBody').innerHTML = '<p>' + x[1] + '</p>';
  document.getElementById('goaDetail').classList.add('show');
}
function closeGoaDetail(e){if(e&&e.target!==e.currentTarget)return;document.getElementById('goaDetail').classList.remove('show');}


function closeGoa2ToPlaces(){
  const room=document.getElementById('goaRoom2');
  const detail=document.getElementById('goaDetail2');
  const places=document.getElementById('placesRoom');
  if(detail) detail.classList.remove('show');
  if(room) room.classList.remove('show');
  if(places) places.classList.add('show');
  document.body.style.overflow='hidden';
}

