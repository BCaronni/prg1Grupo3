let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get("id");
let url = `https://dummyjson.com/recipes`;

if (id) {
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let recetas = data
            let receta = "";
            // aca se recorren los ids de todas las recetas, la que coincide con el id se la reemplaza como la variable receta
            for (let i = 0; i < recetas.recipes.length; i++) {
                if (recetas.recipes[i].id == id) {
                    receta = recetas.recipes[i];
                }
            }

            if (receta) {

                let recipeDetail = document.querySelector(".recipeDetail");

                let cadena = `
                    <h2>${receta.name}</h2>
                    <img src="${receta.image}" alt="${receta.name}"  />

                    <p>Instrucciones: </p>`;
                    // Aca con el bucle recorremos las instrucciones de la receta por el ID, y se agregan todas como <p>
                    for (let i = 0; i<receta.instructions.length; i++){
                        cadena += `<p>-${receta.instructions[i]} </p>`;
                    }
                    
                 cadena +=`
                    <p>Tiempo de cocción: ${receta.cookTimeMinutes} minutos</p>
                    <p>Categorías:</p>
                   <ul>
                   ` ;


                    // Aca con el for recorremos las categorias y las que coincidan con el ID se agregan a la lista
                for (let i = 0; i < receta.tags.length; i++) {
                    cadena += `<li><a href="./categorias.html?category=${receta.tags[i]}" class="categorias">${receta.tags[i]}</a></li>`;
                }

                cadena += `</ul>`;
                
                recipeDetail.innerHTML = cadena;
            } 
        })
        .catch(function (error) {
            console.error('No se encuentra los detalles de la receta:', error);
            alert('No se puede cargar la receta.');
        });
} 
