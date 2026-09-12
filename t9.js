
(function(){
  const ltData={
    jaguar:["Jaguar Classic Black","She bought this for me. A little bottle, but somehow another reminder of her sitting on my shelf."],
    tumbler:["Harry Potter Tumbler","You gave me this. I didn't use it for a long time because I didn't have a place where it felt right. Now I use it every day — and every time I do, it reminds me of you."],
    bunny:["The Tiny Bunny","I bought this for you. You never took it to your place, so somehow it stayed here with me. And now this tiny little bunny keeps reminding me of you."],
    candles:["Scented Candles","You took them with you, and then came back saying we'd light them when you'd be here with me. So for now, they wait."],
    adidas:["Adidas Shoes","Another little thing you gave me. One more piece of you that somehow became part of my everyday life."],
    armani:["Armani Bag","You gave it to me. Another thing that sits quietly among all the other little reminders of you."],
    dudu:["Dudu & Bubu","Two little characters. A very big part of our story. They took months to find, and now they sit in my study like our favourite little storytellers."],
    penguins:["Miniso Penguin & Baby","A tiny pair that somehow became part of the little world around me."],
    mugs:["Our Mugs","Two mugs. Matching, ordinary, ours. The kind of little thing that doesn't need a big story to feel special."],
    food:["Our Food","Her favourites. My favourites. Momo phases, coffee phases, nachos phases, daru phases — we don't just eat, we commit to a phase until we're completely done with it. 😂"],
    firstBirthday:["The Hoodie & Jeans","Your first birthday gift to me — the hoodie and jeans set. It is one of those gifts where the clothes are only half the story; the person who chose them is the other half."],
    secondBirthday:["The “Complimentary” Gift","Your second birthday gift — the OffDuty jeans, the one you casually called a complimentary gift. Somehow, even the way you name your gifts has become part of the memory."],
    parisSweaters:["The Three Sweaters","Three sweaters from Paris. Three little pieces of a trip that came back home with me."],
    tulips:["The Tulips","Tulips weren't easily available in Delhi, but you still made it happen. You got them arranged from Bangalore, woke up early, and made sure they reached me as a beautiful bouquet. It wasn't just flowers — it was the effort, the planning, and the fact that you went so far out of your way to make something feel special. ❤️"]
  };
  window.openLittleThing=function(key){
    const d=ltData[key]; if(!d)return;
    const imageMap={
      jaguar:'little-panel-01.jpg', tumbler:'little-panel-02.jpg', bunny:'little-panel-03.jpg',
      candles:'little-panel-04.jpg', adidas:'little-panel-05.jpg', armani:'little-panel-06.jpg',
      dudu:'little-panel-07.jpg', penguins:'little-panel-08.jpg', mugs:'little-panel-09.jpg',
      food:'little-panel-10.jpg', firstBirthday:'little-panel-11.jpg', secondBirthday:'little-panel-12.jpg',
      parisSweaters:'little-panel-13.jpg', tulips:'little-panel-14.jpg'
    };
    const modal=document.getElementById('littleThingModal');
    if(!modal)return;

    /* Always hoist the modal to <body>. This prevents the Little Things
       room's stacking context from ever putting the popup behind the room. */
    if(modal.parentElement !== document.body){
      document.body.appendChild(modal);
    }
    modal.style.position='fixed';
    modal.style.inset='0';
    modal.style.zIndex='2147483647';

    const img=document.getElementById('littleThingModalImage');
    img.src=imageMap[key]||'';
    img.alt=d[0];
    document.getElementById('littleThingModalContent').innerHTML='<h2>'+d[0]+'</h2><div class="lt-rule"></div><p>'+d[1]+'</p>';
    modal.classList.add('active');
    document.body.style.overflow='hidden';
  };
  window.closeLittleThing=function(){
    document.getElementById('littleThingModal').classList.remove('active');
    document.body.style.overflow='';
  };
  window.openLittleThings=function(){
    document.querySelectorAll('.little-things-room').forEach(x=>x.classList.add('active'));
    document.body.style.overflow='hidden';
  };
  window.closeLittleThings=function(){
    document.getElementById('littleThingsRoom').classList.remove('active');
    document.body.style.overflow='';
  };
})();
