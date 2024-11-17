//Hacemos solicitud GET de la api de recetas (Tenemos que ver si hay que usar la de search o la de all recipes!!!)
fetch('https://dummyjson.com/recipes')
    //esto veamos si hay que dejarlo porque venia con la pagina pero no se si no hay que hacerlo como el de rick y morty.
    .then(function (response){
        return response.json();
    })
    //.then(console.log);
    
    //Comento para despues corregir. Genero una variable para la lista de recetas
    .then(function (data){
        let recetas = data.recipes;
        //Empiezo una cadena vacia para el html
        let cadena = "";
        let recipeList = document.querySelector(".recipeList");

        //estilos?
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
      

    


