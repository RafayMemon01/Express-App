import express from 'express';
import  NewsAPI  from 'newsapi';
const newsapi = new NewsAPI('3f19eb578b8a4e06a1e026c834c74472');
import path from 'path';
import version_1Api from './v1_Apis/index.mjs'

const __dirname = path.resolve();
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());


app.use("/v1", version_1Api)

app.get("/news",(req, res)=>{
    newsapi.v2.topHeadlines({
        q: 'ai',
        category: 'technology',
        language: 'en',
        country: 'us'
    }).then(response => {
        res.send(response);
    }).catch(err => {
        res.status(500).send(err);
    });
})

app.use(express.static(path.join(__dirname, "public")));
app.use(("/static"),express.static(path.join(__dirname, "static")));
app.use(("*"), express.static(path.join(__dirname, "public/Error")));

app.listen(port,()=>{
    console.log(`Server is running on Port ${port} `);
});
