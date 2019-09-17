window.login_counter = 0;
$(".home .Slogan").click(function(event) {
  event.preventDefault();
  window.login_counter++;

  if (window.login_counter === 5) {
    $("button.mv-login").click();
  }
});
