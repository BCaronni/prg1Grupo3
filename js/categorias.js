console.log("Cargando categorías desde la API");
fetch("https://dummyjson.com/recipes/tags")
  .then(function (response) {
    return response.json();
  })

  // Genero una variable para la lista de recetas
  .then(function (tags) {
    let tagList = document.querySelector(".tagList");
    let errorMessage3 = document.querySelector(".errorMessage3");
    console.log("errorMessage3: ", errorMessage3);

    //Empiezo una cadena vacia para el html
    let cadena = "";

    tagList.style.display = "wrap";
    tagList.style.display = "space-evenly";


    for (let i = 0; i < tags.length; i++) {
      cadena +=

        `<a  class="categoriaArticleClick" href="./resultado.html?buscador3=${tags[i]}">
          <article class="categoriaArticle">
            <p>${tags[i]}</p>
          </article>
        </a>
      `;
    }

    tagList.innerHTML = cadena;
  });
