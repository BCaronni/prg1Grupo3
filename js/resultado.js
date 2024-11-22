

let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let buscador3 = queryStringObj.get("buscador3");
console.log("buscador: " , buscador3)
let url =  `https://dummyjson.com/recipes/tag/${buscador3}` 
let errorMessage5 = document.querySelector("#mensaje-error5");
console.log("errorMessage5" , errorMessage5)
errorMessage5.style.display ="none";
let categoriaS = document.querySelector(".categoriaS");
let cadena10 = ""

if (buscador3){
    console.log("Categoria recibida: ", buscador3)//si existe buscador se busca en la api
    fetch(url)
    
    .then(function(response){
       

       // console.log("recetas: ", JSON.stringify(response.recipes,null,4));//En esto nos ayudo piero
        return response.json();
    })
    .then(function(data){
        let categoriaData = data.recipes;
        for (let i = 0; i < categoriaData.length; i++){
            cadena10 += 
             `<article>
                     <img src="${categoriaData[i].image}" alt="">
                     <h3>${categoriaData[i].name}</h3>
                      <p><strong>Dificultad:</strong> ${categoriaData[i].difficulty}</p>
                        <p><a href="receta.html?id=${categoriaData[i].id}" style="text-decoration: none; color: blue;">Ver más</a></p>
                     
               </article>
    
            `;
        };
        categoriaS.innerHTML = cadena10;
    })
        
    
}
