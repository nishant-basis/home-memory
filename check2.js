
    /* =========================
       WHEN I MISS YOU
    ========================== */

    function openMissYou() {
      const home = document.getElementById("home");
      const room = document.getElementById("missRoom");
      if (!room) return;
      if (home) home.style.display = "none";
      room.classList.add("show");
      document.body.style.overflow = "hidden";
    }

    function closeMissYou() {
      closeMissNote();
      const home = document.getElementById("home");
      const room = document.getElementById("missRoom");
      if (room) room.classList.remove("show");
      document.body.style.overflow = "auto";
      if (home) home.style.display = "block";
      window.scrollTo(0, 0);
    }

    function openMissNote(index) {
      const sources = document.querySelectorAll("#missNoteSources .miss-source");
      const source = sources[index];
      const modal = document.getElementById("missNoteModal");
      if (!source || !modal) return;
      document.getElementById("missModalKicker").textContent = source.querySelector(".kicker").textContent;
      document.getElementById("missModalTitle").textContent = source.querySelector(".title").textContent;
      document.getElementById("missModalBody").innerHTML = source.querySelector(".body").innerHTML;
      modal.classList.add("show");
      document.body.style.overflow = "hidden";
    }

    function closeMissNote(e) {
      if (e && e.target !== e.currentTarget) return;
      const modal = document.getElementById("missNoteModal");
      if (modal) modal.classList.remove("show");
      const room = document.getElementById("missRoom");
      if (room && room.classList.contains("show")) document.body.style.overflow = "hidden";
    }

    document.addEventListener("keydown", function(e){
      if(e.key === "Escape") closeMissNote();
    });

    document.addEventListener("DOMContentLoaded", function () {
      document.querySelectorAll(".room-card").forEach(function (card) {
        if (card.textContent.includes("When I Miss You")) {
          card.style.cursor = "pointer";
          card.addEventListener("click", openMissYou);
        }
      });
    });


/* =========================
       ENTER HOME
    ========================== */

    document.addEventListener("DOMContentLoaded", function () {

      const enterButton = document.getElementById("enterButton");

      enterButton.addEventListener("click", function () {

        enterHome();

      });

    });


    function enterHome() {

      const opening = document.getElementById("opening");
      const home = document.getElementById("home");

      opening.classList.add("hide");

      setTimeout(() => {

        home.classList.add("show");

        document.body.style.overflow = "auto";

      }, 700);

    }


    /* =========================
       LITTLE MAGIC
    ========================== */

    let magicFound = 0;
    let magicResetPending = false;

    function resetMagicDiscovery() {
      const stars = document.querySelectorAll(".magic-star");
      stars.forEach(function(star){ star.classList.remove("found"); });
      magicFound = 0;
      const progress = document.getElementById("magicProgress");
      const note = document.getElementById("magicNote");
      if(progress) progress.textContent = "0 of 7 discovered";
      if(note) note.innerHTML = "The room is quiet for now.<br/>Seven stars are brighter than the rest. Find them.";
      magicResetPending = false;
    }

    // Public hook used by the HOME secret layer.
    window.resetMagicDiscovery = resetMagicDiscovery;

    function openMagic() {

      document.getElementById("home").style.display = "none";
      document.getElementById("magicRoom").classList.add("show");

      window.scrollTo({
        top: 0,
        behavior: "instant"
      });

      document.body.style.overflow = "hidden";

    }

    function closeMagic() {

      document.getElementById("magicRoom").classList.remove("show");
      document.getElementById("home").style.display = "block";

      document.body.style.overflow = "auto";

    }

    document.addEventListener("DOMContentLoaded", function () {

      const stars = document.querySelectorAll(".magic-star");
      const note = document.getElementById("magicNote");
      const progress = document.getElementById("magicProgress");

      stars.forEach(function (star) {

        star.addEventListener("click", function () {

          if (!star.classList.contains("found")) {

            star.classList.add("found");
            magicFound++;

          }

          note.innerHTML = star.dataset.note;
          progress.textContent = magicFound + " of 7 discovered";

          if (magicFound === 7) {

            note.innerHTML =
              "You found all seven.<br>" +
              "Looks like you've discovered everything... for now. ♡";
            magicResetPending = true;
            if(window.openHomeSecret) setTimeout(function(){ window.openHomeSecret("magic"); }, 450);

          }

        });

      });

    });


    /* =========================
       TEMPORARY ROOMS
    ========================== */

    function openMessage(title) {

      document.getElementById("messageTitle").textContent = title;

      document.getElementById("message").classList.add("show");

    }


    function closeMessage() {

      document.getElementById("message").classList.remove("show");

    }


    /* =========================
       OUR STORY
    ========================== */

    function openStory() {

      const home = document.getElementById("home");
      const storyRoom = document.getElementById("storyRoom");

      const c2 = document.getElementById("storyChapter2");
      const c3 = document.getElementById("storyChapter3");
      if (c2) c2.classList.remove("show");
      if (c3) c3.classList.remove("show");

      home.style.display = "none";

      storyRoom.classList.add("show");

      window.scrollTo({
        top: 0,
        behavior: "instant"
      });

      document.body.style.overflow = "auto";

    }


    function closeStory() {

      const storyRoom = document.getElementById("storyRoom");
      const chapter2 = document.getElementById("storyChapter2");
      const chapter3 = document.getElementById("storyChapter3");
      const chapter4 = document.getElementById("storyChapter4");
      const chapter5 = document.getElementById("storyChapter5");
      const home = document.getElementById("home");

      storyRoom.classList.remove("show");
      if (chapter2) chapter2.classList.remove("show");
      if (chapter3) chapter3.classList.remove("show");
      if (chapter4) chapter4.classList.remove("show");
      if (chapter5) chapter5.classList.remove("show");

      home.style.display = "block";

      window.scrollTo({
        top: 0,
        behavior: "instant"
      });

    }

  