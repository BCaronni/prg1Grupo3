console.log("El archivo header.js está cargado correctamente.");

let buscarForm = document.querySelector("#buscarForm");
let searchInput = document.querySelector("#searchInput");
let errorMessage = document.querySelector("#mensaje-error");
let errorMessage2 = document.querySelector("#mensaje-error2");

let querString = location.search;
let querStringObj = new URLSearchParams(querString);
let buscador = querStringObj.get("buscador");

buscarForm.addEventListener("submit", function (event) {
  event.preventDefault();

//validacion
  if (searchInput.value == "") {
      errorMessage2.style.display = "block";
      errorMessage.style.display = "none"; // Oculta el mensaje de "muy corto"

   } else if (searchInput.value.length < 3) {
      errorMessage.style.display = "block"; // Muestra el mensaje de "muy corto"
      errorMessage2.style.display = "none"; // Oculta el mensaje de "campo vacío"


    } else {//si esta validado pasa a esto
      errorMessage.style.display = "none";
      errorMessage2.style.display = "none";//no hay mensajes de alerta
      window.location.href = `./resultado.html?buscador=${searchInput.value}` //desde el html que sea, se dirige a resultado.html y el valor de buscador es el del searchinput

    }
  });
  

    

    if (buscador){
      console.log("Termino de busqueda recibido: ", buscador)//si existe buscador se busca en la api
      fetch(`https://dummyjson.com/recipes/search?q=${buscador}`)
        .then(function (response) {
          return response.json();
          })
      
        .then(function (data) {
            //variable para las recetas
            let recetasSearch = data.recipes;
      
              //Cadena vacia
            let cadenaSearch = "";
            let recipeSearch = document.querySelector(".recipeSearch");
      
              // Recorro el array
            for (let i = 0; i < recetasSearch.length; i++) {//recorre para mostrar cada resultado a la busqueda y la misma info que muestra index.js
              cadenaSearch += `<article>
                              
                              <img src="${recetasSearch[i].image}" alt="">
                              <h3>${recetasSearch[i].name}</h3>
                              <p><strong>Dificultad:</strong> ${recetasSearch[i].difficulty}</p>
                              <p><a href="receta.html?id=${recetasSearch[i].id}" style="text-decoration: none; color: blue;">Ver más</a></p>
                          </article>
                              `;
              }
              recipeSearch.innerHTML = cadenaSearch;

            });
        }
      
    
  
  
searchInput.addEventListener("blur", function () {
    if (searchInput.value == "") {
      errorMessage2.style.display = "block";
      errorMessage.style.display = "none";
    } else {
      errorMessage2.style.display = "none";
    }
  });


