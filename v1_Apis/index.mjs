import express from 'express';

let router = express.Router();

import authRouter from './routes/auth.mjs';
import commentRouter from './routes/comment.mjs';
import postRouter from './routes/post.mjs';

router.use(authRouter);

router.use((res, req, next) =>{
    const token = "valid";
    if(token === "valid"){
        next();
    }else{
        res.status(401).send("Unauthorized");
    }
});

router.use(commentRouter);
router.use(postRouter);



export default router;