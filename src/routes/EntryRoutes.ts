import { Router } from 'express';
import { EntryService } from '../domain/entry/EntryService';

export default function EntryRoutes(entryService: EntryService): Router {
    const router = Router();

    router.get('/:userId', async (req, res) => {
        const entries = entryService.getEntriesByUserId(req.params.userId);
        res.json(entries);
    });

    return router;
}
