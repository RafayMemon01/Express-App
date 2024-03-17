import express from 'express';
let router = express.Router();

router.post('/login', (req, res) => {
    res.send('this is login' + new Date());
    console.log('this is login ',new Date())
});

router.post('/signup', (req, res) => {
    res.send('this is signup' + new Date());
    console.log('this is signup ',new Date())
});


export default router;