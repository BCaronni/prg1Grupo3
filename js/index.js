//Hacemos solicitud GET de la api de recetas 
fetch('https://dummyjson.com/recipes')
    .then(function (response){
        return response.json();
    })

    
    // Genero una variable para la lista de recetas
    .then(function (data){
        let recetas = data.recipes;
        //Empiezo una cadena vacia para el html
        let cadena = "";
        let recipeList = document.querySelector(".recipeList");

        //estilos
        recipeList.style.display = "flex";
        recipeList.style.display = "wrap";
        recipeList.style.display = "space-evenly";



        //Recorro el array
        for (let i = 0; i < recetas.length; i++){
            cadena += 
             `<article>
                     <img src="${recetas[i].image}" alt="">
                     <h3>${recetas[i].name}</h3>
                      <p><strong>Dificultad:</strong> ${recetas[i].difficulty}</p>
                      <p><a href="receta.html?id=${recetas[i].id}" style="text-decoration: none; color: blue;">Ver más</a></p>
                     
               </article>

            `;
        }


    
    recipeList.innerHTML = cadena;
})
    .catch(function (error) {
        // En caso de error en la solicitud, mostramos el mensaje de error en la consola
        console.log("Error al cargar las recetas: ", error);
      });
      

    


