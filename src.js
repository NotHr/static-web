document.addEventListener("DOMContentLoaded", function () {
  var buttons = document.getElementsByClassName("button");
  var popup = document.getElementById("popup");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (event) {
      event.preventDefault();
      popup.classList.add("show");
      setTimeout(function () {
        window.location.href = event.target.href;
      }, 3000);
    });
  }
});
