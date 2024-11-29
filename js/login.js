let loginForm = document.querySelector("#loginForm");

loginForm.addEventListener("submit", function (event) {
  let email = document.querySelector("#email");
  let password = document.querySelector("#password");

  if (email.value == "") {
    event.preventDefault();
    alert("El email no puede estar vacio");
  } else if (password.value == "") {
    event.preventDefault();
    alert("La contraseña no puede estar vacia");
  }
});
