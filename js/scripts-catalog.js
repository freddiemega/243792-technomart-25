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
      //evt.preventDefault();
      if (evt.keyCode === 27) {
        if (buyPopup.classList.contains("modal-show")) {
        buyPopup.classList.remove("modal-show");
        }
      }
    });



      var linkfocus = document.querySelectorAll(".focus-here");
      var arr = [].slice.call(linkfocus);

      for (var i = 0, len = arr.length; i < len; i++) {

      arr[i].addEventListener("focus", function() {
        this.parentElement.classList.add("focus");
        this.parentElement.parentElement.classList.add("child-focus");
      });
      arr[i].addEventListener("blur", function() {
        this.parentElement.classList.remove("focus");
        this.parentElement.parentElement.classList.remove("child-focus");
      });

      }
