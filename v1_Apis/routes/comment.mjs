import express from "express";
let router = express.Router();

//Get /v1/comment/:postId/:commentId
router.get("/comment/:postId/:commentId", (req, res) => {
  console.log("This is comment", new Date());
  console.log(req.params);
  res.send("This is comment" + new Date());
});


//get /v1/comments/:postId
router.get("/comments/:postId", (req, res) => {
  console.log("These are all comments", new Date());
  console.log(req.params);
  res.send("This is comment" + new Date());
});

//Get /v1/comment/:postId/:commentId
router.put("/comment/:postId/:commentId", (req, res) => {
  console.log("This is comment", new Date());
  console.log(req.params);
  res.send("This is comment" + new Date());
} )

//delete /v1/comment/:postId/:commentId
router.delete("/comment/:postId/:commentId", (req, res) => {
  console.log("This is comment", new Date());
  console.log(req.params);
  res.send("This is comment" + new Date());
});

export default router;
