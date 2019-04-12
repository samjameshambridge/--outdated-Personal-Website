// type effect for landing page
(function typeIIFE() {
  const typingObject = {
    init: function (txtElement, words, typeSpeed) {
      this.txtElement = txtElement; //DOM element
      this.words = words; /*Front End Developer*/
      this.typeSpeed = typeSpeed;
      this.isTyping = false; //differentiate between waiting and typing
      this.hasDeleted = false; //to differentitiate between after and before the decrememnt
      this.i = 0; //increment counter
      this.d = 1; //decrement counter
    },

    type: function () {
      var interval = setInterval(() => {
        if (
          this.i === 0 ||
          this.i === 2 ||
          this.i === 4 ||
          this.i === 6 ||
          this.i === 23 ||
          this.i === 25
        ) {
          this.borderBlue();
        }

        if (
          this.i === 1 ||
          this.i === 3 ||
          this.i === 5 ||
          this.i == 22 ||
          this.i === 24
        ) {
          this.borderTransparent();
        }

        if (this.i >= 7 && this.i <= 15) {
          this.isTyping = true;
          this.incrementCharacterCtrl();
        }

        if (this.i === 16) {
          this.txtElement.innerHTML = "Front-End&nbsp";
          this.borderBlue();
        }

        if (this.i >= 17 && this.i <= 23) {
          this.incrementCharacterCtrl();
        }

        if (this.i >= 28 && this.i <= 31) {
          this.decrementCharacterCtrl();
        }

        if (this.i >= 32) {
          this.hasDeleted = true;
          this.words = "Front-End Developer";
          this.incrementCharacterCtrl();
        }

        // if loop is finished, clear interval
        if (this.i === 36) {
          clearInterval(interval);
          setTimeout(this.borderTransparent(), 2000);
        }
        // if loop is not finished, add one to the counter
        else {
          this.i++;
        }
      }, this.typeSpeed);
    },

    //cursor flashing effect
    borderBlue: function () {
      this.txtElement.style.borderRight = "solid 2px rgb(76, 122, 145)";
    },

    borderTransparent: function () {
      this.txtElement.style.borderRight = "solid 2px transparent";
    },

    //increment the character for a typing effect
    incrementCharacterCtrl: function () {
      var txt = this.words.toString();

      if (this.isTyping) {
        this.txtElement.innerHTML = txt.substring(0, this.i - 6);
        this.borderBlue();
      }

      if (this.hasDeleted) {
        this.txtElement.innerHTML = txt.substring(0, this.i - this.d - 8);
      }
    },

    // take away character for a cursor deleting effect
    decrementCharacterCtrl: function () {
      var txt = this.words.toString();

      this.txtElement.innerHTML = txt.substring(0, this.i - this.d - 11);

      this.d += 2;
    }
  };

  // call init on dom load
  document.addEventListener("DOMContentLoaded", initApp);

  // begin
  function initApp() {
    const txtElement = document.querySelector(".txt-type");
    const words = JSON.parse(txtElement.getAttribute("data-words"));
    const typeSpeed = txtElement.getAttribute("data-wait");

    // init type writer
    typingObject.init(txtElement, words, typeSpeed);
    typingObject.type();
  }
})();

// smooth scrolling initializaion
(function scrollerIIFE() {
  $("a").on("click", function (e) {
    if (this.hash !== "") {
      e.preventDefault();

      let hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        () => {
          window.location.hash = hash;
        }
      );
    }
  });
})();

// bootstrap carousel initialization
(function carouselIIFE() {
  $(".carousel").carousel({
    interval: 0,
    keyboard: true,
    ride: false,
    wrap: true
  });
})();
