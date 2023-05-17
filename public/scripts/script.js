document.addEventListener("DOMContentLoaded", () => {
  updatePosts();
});

function updatePosts() {
  fetch("http://localhost:3000/routes/all")
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      let postElements = "";
      let posts = json;
      posts.forEach((post) => {
        let postElement = ` <div id="${post.id}" class="card">
            <div class="card-header">
                <h5 class="card-title">${post.title}</h5>
            </div>
            <div class="card-body">
                <div class="card-text">${post.description}</div>
            </div>
        </div>`;
        postElements += postElement;
      });
      document.getElementById("posts").innerHTML = postElements;
    });
}
function newPost() {
  let title = document.getElementById("title").value;
  let description = document.getElementById("desc").value;
  if (title === "" || description === "") {
    alert("Preencha todos os campos");
    return;
  }

  // Check if a similar post already exists
  fetch("http://localhost:3000/routes/all")
    .then((res) => res.json())
    .then((posts) => {
      const similarPost = posts.find(
        (post) => post.title === title && post.description === description
      );
      if (similarPost) {
        alert("Já existe um post igual");
      } else {
        const post = { title, description };
        const options = {
          method: "POST",
          headers: new Headers({
            "content-type": "application/json",
          }),
          body: JSON.stringify(post),
        };
        fetch("http://localhost:3000/routes/new", options)
          .then((res) => {
            if (res.ok) {
              alert("Postagem enviada com sucesso!");
              updatePosts();
            } else {
              alert(
                "Ocorreu um erro ao enviar a postagem. Por favor, tente novamente mais tarde."
              );
            }
          })
          .catch((error) => {
            alert(
              "Ocorreu um erro ao enviar a postagem. Por favor, tente novamente mais tarde."
            );
            console.log(error);
          });
      }
    })
    .catch((error) => {
      alert(
        "Ocorreu um erro ao verificar a existência de postagens. Por favor, tente novamente mais tarde."
      );
      console.log(error);
    });
}
