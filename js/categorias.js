console.log("Cargando categorías desde la API");
fetch("https://dummyjson.com/recipes/tags")
  .then(function (response) {
    return response.json();
  })

  // Genero una variable para la lista de recetas
  .then(function (tags) {
    let tagList = document.querySelector(".tagList");
    //Empiezo una cadena vacia para el html
    let cadena = "";

    tagList.style.display = "wrap";
    tagList.style.display = "space-evenly";

    //Recorro el array, arranca en 0 y va hasta 10,
    for (let i = 0; i < tags.length; i++) {
      cadena +=
        //lo unico que le falta a categorias ademas del css es que si apretas y no tiene nada adentro deje un mensaje. (fuera de eso anda perfecto)
        `<article>
                    <p><a href="./resultado.html?buscador=${tags[i]}"</a>${tags[i]}</p>
                    
            </article>

            `;
    }

    tagList.innerHTML = cadena;
  });
