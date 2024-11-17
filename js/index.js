//Hacemos solicitud GET de la api de recetas (Tenemos que ver si hay que usar la de search o la de all recipes!!!)
fetch('https://dummyjson.com/recipes')
    //esto veamos si hay que dejarlo porque venia con la pagina pero no se si no hay que hacerlo como el de rick y morty.
    .then(res => res.json())
    //.then(console.log);
    
    //Comento para despues corregir. Genero una variable para la lista de recetas
    .then(function (data){
        let recetas = data.results;
        //Empiezo una cadena vacia para el html
        let cadena = "";
        let recipeList = document.querySelector(".recipeList");

        //estilos?

        //Recorro el array
        for (let i = 0; i < recetas.length; i++){
            cadena +=  `

            `
        }


    })


