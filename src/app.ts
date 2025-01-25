import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    // used https://www.digitalocean.com/community/tutorials/setting-up-a-node-project-with-typescript
    return console.log(`Express is listening at http://localhost:${port}`);
});
