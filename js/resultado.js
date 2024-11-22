let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let buscador3 = queryStringObj.get("buscador3");
let url =  `https://dummyjson.com/recipes/tags/${buscador3}` 
let errorMessage5 = document.querySelector("#mensaje-error5");
console.log("errorMessage5" , errorMessage5)
errorMessage5.style.display ="none";




if (buscador3){
    console.log("Categoria recibida: ", buscador3)//si existe buscador se busca en la api
    fetch(`https://dummyjson.com/recipes/tag/${buscador3}`)
      .then(function (response) {
        return response.json();
        })
    .then(function(response){
        console.log("Respuesta de la API:", response); // Verifica la estructura
        let total = response.total;
        console.log("total: ", total);
        console.log("recetas: ", JSON.stringify(response.recipes,null,4));//En esto nos ayudo piero
        
        
        if (total == 0){
            console.log("No hay recetas para esta categoria")
            errorMessage5.style.display = "block";
        }
        
    
    })
}
