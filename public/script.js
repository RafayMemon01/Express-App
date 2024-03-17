const watch = document.querySelector(".watch");

const getTime = () => {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  document.querySelector(
    "#watch"
  ).textContent = `${hours}:${minutes}:${seconds}`;
};

setInterval(getTime, 1000);

const getNews = async () => {
  const newsContainer = document.querySelector(".container");

  const response = await axios.get("/news");
  const news = response.data.articles;

  news.map((article) => {
    const newsCard = document.createElement("div");
    newsCard.classList.add("newsCard");
    newsCard.innerHTML = `
    <h4>${article.title}</h4>
    <p>${article.description}</p>
    <img draggable="false" width="200px" height="150px" src="${article.urlToImage}" alt="${article.alt}" />
    <a href="${article.url}" target="_blank">read more</a>
    `;
    newsContainer.appendChild(newsCard);
  });

  {
    /*
    <div class="newsCard">
        <h4></h4>
        <p></p>
        <img draggable="false" width="200px" height="150px" src="" alt="" />
        <a href="" target="_blank">read more</a>
    </div> 
    */
  }
};

getNews();

const getPost = async()=>{
  const response = await axios.get("/v1/posts");
  console.log(response.data);
  const postContainer = document.querySelector(".postContainer");
  const posts = response.data;
  posts.map((post)=>{
    const postCard = document.createElement("div");
    postCard.classList.add("post");
    postCard.innerHTML = `
    <h3>Title: ${post.title}</h3>
    <p>Text: ${post.text}</p>
    <div class="postButtons">
        <button>Edit</button>
         <button>Delete</button>
    </div>
    `;
    postContainer.appendChild(postCard);
  })}

  {
    /*
    <div class="post">
        <h3></h3>
        <p></p>
          <div class="postButtons">
             <button>Edit</button>
              <button>Delete</button>
          </div>
    </div>
    */

  // <div class="post">
  //    <h3></h3>
  //    <p></p>
  //      <div class="postButtons">
  //         <button>Edit</button>
  //          <button>Delete</button>
  //      </div>
  // </div>
}

getPost();


document.querySelector(".newPostCreatingButton").addEventListener("click",()=>{
  window.location.href = "/create-post";
})
