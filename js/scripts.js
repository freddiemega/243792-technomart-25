    //modal write us
    var link = document.querySelector(".write-us-link");

    var popup = document.querySelector(".modal-subs");
    var close = popup.querySelector(".modal-close");

    var username = popup.querySelector("[name=user-name]");
    var form = popup.querySelector("form");
    var useremail = popup.querySelector("[name=user-email]");
    var usertext = popup.querySelector("[name=user-text]");

    var isStorageSupport = true;
    var storage = "";

    try {
      storage = localStorage.getItem("username");
      storageemail = localStorage.getItem("useremail");
    } catch (err) {
      isStorageSupport = false;
    }

    link.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.add("modal-show");

    if (storage && storageemail) {
      username.value = storage;
      useremail.value = storageemail;
      usertext.focus();
    } else {
      username.focus();
    }

    });

    close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
    });

    form.addEventListener("submit", function (evt) {
    if (!username.value || !useremail.value || !usertext.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
      console.log("Нужно заполнить все поля формы");
    } else {
      if (isStorageSupport) {
      localStorage.setItem("username", username.value);
      localStorage.setItem("useremail", useremail.value);
    }
    }
    });

    window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {

      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
      }
    }
    });



    //modal map
    var mapLink = document.querySelector(".contacts-button-map");

    var mapPopup = document.querySelector(".modal-map");
    var mapClose = mapPopup.querySelector(".modal-close");

    mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
    });

    mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
    });

    window.addEventListener("keydown", function (evt) {

      if (evt.keyCode === 27) {
        if (mapPopup.classList.contains("modal-show")) {
          mapPopup.classList.remove("modal-show");
        }
      }
    });

    //modal buy item
    var buyLinkAll = document.querySelectorAll(".buy");

    var buyPopup = document.querySelector(".modal-cart");
    var buyClose = buyPopup.querySelector(".modal-close");

    var buyLinkAll = [].slice.call(buyLinkAll);

    for (var i = 0, len = buyLinkAll.length; i < len; i++) {

      buyLinkAll[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      buyPopup.classList.add("modal-show");
    });

    }

    buyClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    buyPopup.classList.remove("modal-show");
    });

    window.addEventListener("keydown", function (evt) {

      if (evt.keyCode === 27) {
        if (buyPopup.classList.contains("modal-show")) {
        buyPopup.classList.remove("modal-show");
      }
    }
    });

    //service slider
    var serviceLinkAll = document.querySelectorAll(".button-service");
    var serviceLinkAll = [].slice.call(serviceLinkAll);
    var serviceBlockAll = document.querySelectorAll(".service-slider-block");
    var serviceBlockAll = [].slice.call(serviceBlockAll);

    serviceLinkAll[0].addEventListener("click", function (evt) {
    evt.preventDefault();
      for (var j = 0, len = serviceBlockAll.length; j < len; j++) {
      serviceBlockAll[j].classList.remove("slider-block-active");
      serviceLinkAll[j].classList.remove("button-service-current");
      }
    serviceLinkAll[0].classList.add("button-service-current");
    serviceBlockAll[0].classList.add("slider-block-active");
    });

    serviceLinkAll[1].addEventListener("click", function (evt) {
    evt.preventDefault();
      for (var j = 0, len = serviceBlockAll.length; j < len; j++) {
      serviceBlockAll[j].classList.remove("slider-block-active");
      serviceLinkAll[j].classList.remove("button-service-current");
      }
    serviceLinkAll[1].classList.add("button-service-current");
    serviceBlockAll[1].classList.add("slider-block-active");
    });

    serviceLinkAll[2].addEventListener("click", function (evt) {
    evt.preventDefault();
      for (var j = 0, len = serviceBlockAll.length; j < len; j++) {
      serviceBlockAll[j].classList.remove("slider-block-active");
      serviceLinkAll[j].classList.remove("button-service-current");
      }
    serviceLinkAll[2].classList.add("button-service-current");
    serviceBlockAll[2].classList.add("slider-block-active");
    });




    //main slider
    var pointLeft = document.querySelector(".point-left");
    var pointRight = document.querySelector(".point-right");

    var counter = 0,
        $items = document.querySelectorAll('.slider-block'),
        numItems = $items.length;

    var showCurrent = function(){
      var itemToShow = Math.abs(counter%numItems);

      [].forEach.call( $items, function(el){
        el.classList.remove('slider-visible');
      });

      $items[itemToShow].classList.add('slider-visible');

      pointLeft.classList.toggle('point-selected-left');
      pointLeft.classList.toggle('slider-point-left');
      pointRight.classList.toggle('point-selected-right');
      pointRight.classList.toggle('slider-point-right');
    };


    document.querySelector('.slider-arrow-left').addEventListener('click', function() {
         counter++;
         showCurrent();
      }, false);

    document.querySelector('.point-left').addEventListener('click', function() {
         counter++;
         showCurrent();
      }, false);

    document.querySelector('.slider-arrow-right').addEventListener('click', function() {
         counter--;
         showCurrent();
      }, false);

    document.querySelector('.point-right').addEventListener('click', function() {
         counter--;
         showCurrent();
      }, false);
