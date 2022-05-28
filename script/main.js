const filmSection = document.querySelector("main");

const movies = [
  {
    image:
      "https://img.elo7.com.br/product/original/3FBA809/big-poster-filme-batman-2022-90x60-cm-lo002-poster-batman.jpg",
    title: "Batman",
    rating: 9.2,
    year: 2022,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique nobis consequuntur dignissimos amet, cupiditate libero doloremque, tempore quod est deserunt a eius maiores incidunt,quas fugiat illo iste dicta laborum.",
    isFavorited: true,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/pt/thumb/9/9b/Avengers_Endgame.jpg/250px-Avengers_Endgame.jpg",
    title: "Avengers",
    rating: 9.2,
    year: 2019,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique nobis consequuntur dignissimos amet, cupiditate libero doloremque, tempore quod est deserunt a eius maiores incidunt,quas fugiat illo iste dicta laborum.",
    isFavorited: false,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/en/1/17/Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg",
    title: "Doctor Strange",
    rating: 9.2,
    year: 2022,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique nobis consequuntur dignissimos amet, cupiditate libero doloremque, tempore quod est deserunt a eius maiores incidunt,quas fugiat illo iste dicta laborum.",
    isFavorited: true,
  },
];

window.onload = function () {
  movies.forEach((movie) => renderMovie(movie));
};

function renderMovie(movie) {
  const { title, image, rating, year, description, isFavorited } = movie;

  //Criação container e adicionando na seção de filmes
  const movieContainer = document.createElement("div");
  movieContainer.classList.add("filme");
  filmSection.appendChild(movieContainer);

  //Criação container imagem, adicionando imagen no container e adicionando no container filme
  const imgContainer = document.createElement("imagem");
  imgContainer.classList.add("imagem");
  const movieImage = document.createElement("img");
  movieImage.src = image;
  movieImage.alt = title + " poster";
  imgContainer.appendChild(movieImage);
  movieContainer.appendChild(imgContainer);

  //Criando div ratings e preenchendo com o titulo do filme, rating, favoritar
  const movieRatings = document.createElement("div");
  movieRatings.classList.add("fav-star");
  movieContainer.appendChild(movieRatings);

  const movieTitle = document.createElement("h4");
  movieTitle.textContent = title + " (" + year + ")";
  movieRatings.appendChild(movieTitle);

  const ratingIcons = document.createElement("div");
  ratingIcons.classList.add("icon");
  movieRatings.appendChild(ratingIcons);

  const starRating = document.createElement("div");
  starRating.classList.add("rating");
  ratingIcons.appendChild(starRating);

  const starImg = document.createElement("img");
  starImg.src = "/assets/estrela.svg";
  starImg.alt = "star";
  starRating.appendChild(starImg);

  const ratingNumber = document.createElement("p");
  ratingNumber.textContent = rating;
  starRating.appendChild(ratingNumber);

  const favContainer = document.createElement("div");
  favContainer.classList.add("fav");
  ratingIcons.appendChild(favContainer);

  const fav = document.createElement("img");
  fav.src = isFavorited ? "/assets/favorito.svg" : "/assets/lupa.svg";
  fav.alt = "star";
  favContainer.appendChild(fav);

  const favoritar = document.createElement("p");
  favoritar.textContent = " Favoritar";
  favContainer.appendChild(favoritar);

  //Criando a div sinopse e preenchendo com a sinopse do filme
  const sinopse = document.createElement("div");
  sinopse.classList.add("sinopse");
  movieContainer.appendChild(sinopse);

  const textSinopse = document.createElement("p");
  textSinopse.textContent = description;
  sinopse.appendChild(textSinopse);

  console.log(movieContainer);
}
