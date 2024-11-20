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
        let cargarMas =document.querySelector("#cargarMas");
        let errorCargarMas =document.querySelector(".errorCargarMas")
        let inicio = 0;
        let diez = 10;
    

        //estilos
        recipeList.style.display = "flex";
        recipeList.style.display = "wrap";
        recipeList.style.display = "space-evenly";

        function cargarRecetas(){

        //Recorro el array, arranca en 0 y va hasta 10, 
        for (let i = inicio; i < inicio + diez; i++){
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
}
// invocamos la funcion para que cuando se abra la pagina aparezcan las primeras 10
cargarRecetas();

// Cuando el usuario apreta el boton, a la variable inicio se le suman 10 y se invoca a la funcion de arriba
// o sea ahora va de 10 a 20 el bucle de arriba, mostrando las siguientes 10
cargarMas.addEventListener("click", function (){
    inicio = inicio + diez;
    cargarRecetas();

});
        
    })
    .catch(function (error) {
        // En caso de error en la solicitud, mostramos el mensaje de error en la consola
        console.log("Error al cargar las recetas: ", error);
      });
      

    


