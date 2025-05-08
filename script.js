const postsData = [
  {
    title: "Título da primeira postagem",
    body: "Aqui vai uma pequena descrição do post",
    image: "img/ex-img.jpg"
  },
  {
    title: "Post 1",
    body: "Informações do primeiro post",
    image: "img/ex-img.jpg"
  },
  {
    title: "Post 2",
    body: "Informações do segundo post",
    image: "img/ex-img.jpg"
  }
];

function posts() {
  const destaque = postsData[0];

  document.getElementById("destaque-title").textContent = destaque.title;
  document.getElementById("destaque-body").textContent = destaque.body;
  document.getElementById("destaque-image").src = destaque.image;

  const container = document.getElementById("posts");

  postsData.slice(1).forEach((post, i) => {
    const realIndex = i + 1; 

    const postRow = document.createElement("div");
    postRow.className = "row align-items-center mb-4";

    postRow.innerHTML = `
      <div class="col-md-4">
        <a href="post.html?index=${realIndex}">
          <img src="${post.image}" class="img-fluid rounded" alt="Imagem do Post">
        </a>
      </div>
      <div class="col-md-8">
        <div class="post-text">
          <a href="post.html?index=${realIndex}" class="text-decoration-none text-dark">
            <h5 class="card-title">${post.title}</h5>
          </a>
          <p class="card-text">${post.body}</p>
        </div>
      </div>
    `;

    container.appendChild(postRow);
  });
}

document.addEventListener("DOMContentLoaded", posts);
