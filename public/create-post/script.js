document.getElementById('postForm').addEventListener("submit", async(e)=>{
    e.preventDefault()

    let userTitle = document.getElementById('title').value;
    let userText = document.getElementById('text').value;

    const post = await axios.post("/v1/post",{
        title:userTitle,
        text:userText
    })

    console.log(post);

    setInterval(()=>{
        userText="";
        userTitle="";
        window.location.href = "/";
    },(2000))
})