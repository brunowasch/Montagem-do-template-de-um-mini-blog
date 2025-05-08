const postsData = [
    {
      title: "Título da primeira postagem",
      body: `Matéria completa`,
      image: "img/ex-img.jpg"
    },
    {
      title: "Post 1",
      body: `Matéria completa`,
      image: "img/ex-img.jpg"
    },
    {
        title: "Post 2",
        body: `Matéria completa`,
        image: "img/ex-img.jpg"
    }
  ];
  
  
  function carregarPost() {
    const params = new URLSearchParams(window.location.search);
    const index = parseInt(params.get("index"));
    const post = postsData[index];
    const container = document.getElementById("post-detalhado");
  
    container.innerHTML = `
      <img src="${post.image}" class="img-fluid rounded mb-4">
      <h2 class="mb-3 text-center color-purple">${post.title}</h2>
      <p class="mb-3 text-center">${post.body}</p>
    `;
  }
  
  document.addEventListener("DOMContentLoaded", carregarPost);
  