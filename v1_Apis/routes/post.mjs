import express from "express";
import { customAlphabet } from "nanoid";
let router = express.Router();
// Define a custom alphabet containing only numeric characters
const numericAlphabet = "0123456789";

// Generate a numeric-only nanoid
const generateNumericId = () => customAlphabet(numericAlphabet, 10)();
const numericId = generateNumericId(); // Generates a numeric nanoid

let posts = [];

router.get("/posts", (req, res, next) => {
  res.send(posts);
  console.log("Posts Sended: - " + new Date());
});
router.post("/post", (req, res, next) => {
  if (!req.body.title || !req.body.text) {
    res.status(403);
    res.send(`required parameters missing, 
        example request body:
        {
            title: "abc post title",
            text: "some post text"
        } `);

    return;
  }

  posts.unshift({
    id: numericId,
    title: req.body.title,
    text: req.body.text,
  });
  console.log("Posts Added at: - " + new Date());

  res.send("Post Created Successfully: " + posts);
});

router.delete("/post/:id", (req, res, next) => {
    const postId = req.params.id;
    if (isNaN(postId)) {
        return res.status(400).send("Post ID must be a number");
    }
    const postIndex = posts.findIndex(post => post.id === postId);
    if (postIndex !== -1) {
        posts.splice(postIndex, 1);
        console.log("Post Deleted at: - " + new Date());
        return res.send("Post Deleted Successfully");
    }
    res.status(404).send("Post Not Found");
});


router.get("/post/:id", (req, res, next) => {
    const postId = req.params.id;
    if (isNaN(postId)) {
        return res.status(400).send("Post ID must be a number");
    }
    const post = posts.find(post => post.id === postId);
    if (post) {
        return res.send(post);
    }
    res.status(404).send("Post Not Found");
});

router.put("/post/:id",(req,res,next)=>{
    const postId = req.params.id;
    if(isNaN(postId)){
        return res.status(400).send("Post ID must be a number");
    }

    const postIndex = posts.findIndex(post => post.id === postId);
    if(postIndex !== -1){
        posts[postIndex].title = req.body.title;
        posts[postIndex].text = req.body.text;
        console.log("Post Updated at: - " + new Date());
        return res.send("Post Updated Successfully: " + posts[postIndex]);
    }
    res.status(404).send("Post Not Found");
})


export default router;
