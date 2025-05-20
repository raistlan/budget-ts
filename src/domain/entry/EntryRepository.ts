import { Entry } from './EntryTypes';
import { v7 as uuid } from 'uuid';

export class EntryRepository {
    constructor() {}

    async createEntry(entry: Entry): Promise<string> {
        console.log({ entry });
        return uuid();
    }

    async getEntriesByUserId(userId: string): Promise<Entry[]> {
        console.log(
            'repo: getting entries for user -- need to pick an ORM:',
            userId
        );
        return [];
    }
}
