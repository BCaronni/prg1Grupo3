console.log("El archivo header.js está cargado correctamente.");
let buscarForm = document.querySelector("#buscarForm");

buscarForm.addEventListener("submit", function (event) {
  let searchInput = document.querySelector("#searchInput");
  let errorMessage = document.querySelector("#mensaje-error");
  console.log("Termino de busqueda:", searchInput.value);

  // Validación de la longitud del texto
  if (searchInput.value.length < 3) {
    errorMessage.style.display = "block"; // Muestra el mensaje de error
    // Con el block de arriba frena el envio
    event.preventDefault()
    
  } else {
    errorMessage.style.display = "none"; // No muestra el mensaje de error
    console.log("El evento submit fue capturado correctamente.");
    fetch(`https://dummyjson.com/recipes/search?q=${searchInput.value}`)
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
});
