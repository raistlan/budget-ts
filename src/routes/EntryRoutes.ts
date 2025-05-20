import { Router } from 'express';
import { EntryService } from '../domain/entry/EntryService';
import { Entry } from '../domain/entry/EntryTypes';

export default function EntryRoutes(entryService: EntryService): Router {
    const router = Router();

    router.post('/', async (req, res) => {
        const entryId = entryService.createEntry(req as unknown as Entry);
        res.json(entryId);
    });

    router.get('/:userId', async (req, res) => {
        const entries = entryService.getEntriesByUserId(req.params.userId);
        res.json(entries);
    });

    return router;
}
