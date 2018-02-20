var  link  = document.querySelector(".special-offer__order");
var popup = document.querySelector(".modal");
var overlay = document.querySelector(".overlay");

if (link) {
  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("to-basket--hidden");
    popup.classList.add("to-basket--active");
    overlay.classList.add("to-basket--active");
  });
}

var buyArray = document.querySelectorAll(".catalog__buy");
var modal = document.querySelector(".to-basket");

for (var i = 0; i <buyArray.length; i++) {
  buyArray[i].addEventListener('click', function(event) {
    event.preventDefault();
    modal.classList.remove("to-basket--hidden");
    modal.classList.add("to-basket--active");
    overlay.classList.add("to-basket--active");
  });

}

if (overlay) {
  overlay.addEventListener("click", function (event) {
    event.preventDefault();
    overlay.classList.remove("to-basket--active");
    modal.classList.remove("to-basket--active");
    modal.classList.add("to-basket--hidden");
  });
}
