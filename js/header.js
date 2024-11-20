console.log("El archivo header.js está cargado correctamente.");

let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let buscador = queryStringObj.get("buscador");

let buscarForm = document.querySelector("#buscarForm");
let searchInput = document.querySelector("#searchInput");
let errorMessage = document.querySelector("#mensaje-error");
let errorMessage2 = document.querySelector("#mensaje-error2");
let validacionBool = false;

if (buscarForm){
  buscarForm.addEventListener("submit", function (event) {
    
    if (searchInput.value == "") {
      errorMessage2.style.display = "block";
      errorMessage.style.display = "none"; // Oculta el mensaje de "muy corto"
      validacionBool = false
      event.preventDefault();
    } else if (searchInput.value.length < 3) {
      errorMessage.style.display = "block"; // Muestra el mensaje de "muy corto"
      errorMessage2.style.display = "none"; // Oculta el mensaje de "campo vacío"
      event.preventDefault();
      validacionBool = false
    } else {
      errorMessage.style.display = "none";
      errorMessage2.style.display = "none";
      validacionBool = true


    if (validacionBool === true ){
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
            for (let i = 0; i < recetasSearch.length; i++) {
              cadenaSearch += `<article>
                              
                              <img src="${recetasSearch[i].image}" alt="">
                              <h3>${recetasSearch[i].name}</h3>
                              <p><strong>Dificultad:</strong> ${recetasSearch[i].difficulty}</p>
                              <p><a href="resultado.html?id=${recetasSearch[i].id}" style="text-decoration: none; color: blue;">Ver más</a></p>
                          </article>
                              `;
              }
              recipeSearch.innerHTML = cadenaSearch;
              
            });
        }
      
    }
  });
  
  
  
/*searchInput.addEventListener("blur", function () {
    if (searchInput.value == "") {
      errorMessage2.style.display = "block";
      errorMessage.style.display = "none";
    } else {
      errorMessage2.style.display = "none";
    }
  });
}
})
*/
}