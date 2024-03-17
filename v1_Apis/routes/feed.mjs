import express from 'express';
let router = express.Router();

// GET     /v1/feed/:userId
router.get('/feed/:userId', (req, res, next) => {
    console.log('this is feed', new Date());
    res.send('feed ');
})


export default router;