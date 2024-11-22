let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let buscador2 = queryStringObj.get("buscador");
let url =  `https://dummyjson.com/recipes/tags/${buscador2}` 
let errorMessage5 = document.querySelector("#mensaje-error5");
console.log("errorMessage5" , errorMessage5)
errorMessage5.style.display ="none";




if (buscador2){
    console.log("Categoria recibida: ", buscador2)//si existe buscador se busca en la api
    fetch(`https://dummyjson.com/recipes/tag/${buscador2}`)
      .then(function (response) {
        return response.json();
        })
    .then(function(response){
        console.log("Respuesta de la API:", response); // Verifica la estructura
        let total = response.total;
        if (total == 0){
            console.log("No hay recetas para esta categoria")
            errorMessage5.style.display = "block";
        }
        
    
    })
}
