import express from 'express';
import { EntryService } from './domain/entry/EntryService';
import { EntryRepository } from './domain/entry/EntryRepository';
import EntryRoutes from './routes/EntryRoutes';
const app = express();
const port = process.env.NODE_PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

//#region TODO: DI container

const entryRepository = new EntryRepository();
const entryService = new EntryService(entryRepository);

//#endregion

//#region registering the routes

app.use('/entries', EntryRoutes(entryService));

//#endregion

app.listen(port, () => {
    // used https://www.digitalocean.com/community/tutorials/setting-up-a-node-project-with-typescript
    return console.log(`Express is listening at http://localhost:${port}`);
});
