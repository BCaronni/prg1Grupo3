let registerForm = document.querySelector("#registerForm")
let errorMessage3 = document.querySelector("#mensaje-error3");
let errorMessage4 = document.querySelector("#mensaje-error4");
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let repeatPassword = document.querySelector("#passwordAgain")
let errorMessage5 = document.querySelector("#mensaje-error5")


registerForm.addEventListener("submit", function(event){

    if (email.value.length == 0 ){

        event.preventDefault();
        errorMessage3.style.display = "block";
        errorMessage4.style.display = "none";

    }

    else if (password.value.length == 0 ){

        event.preventDefault();
        errorMessage4.style.display = "block"; // Muestra el mensaje de "Por favor introducir contraseña"
        errorMessage3.style.display = "none";
    }
    else if (repeatPassword.value == ""){

        event.preventDefault();
        errorMessage5.style.display = "block"; // Muestra el mensaje de "Por favor volver a introducir contraseña"
        errorMessage3.style.display = "none";
    }
    else{//si esta validado pasa a esto
        errorMessage3.style.display = "none";
        errorMessage4.style.display = "none";//no hay mensajes de alerta
  
      }

});

registerForm.addEventListener("blur", function () {
    if (registerForm.value == "") {
      errorMessage4.style.display = "block";
      errorMessage3.style.display = "none";
    } else {
      errorMessage4.style.display = "none";
    }
  });



    

  
