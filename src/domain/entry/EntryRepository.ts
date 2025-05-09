import { Entry } from './EntryTypes';

export class EntryRepository {
    constructor() {}

    async getEntriesByUserId(userId: string): Promise<Entry[]> {
        console.log(
            'repo: getting entries for user -- need to pick an ORM:',
            userId
        );
        return [];
    }
}
