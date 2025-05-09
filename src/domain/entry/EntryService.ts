import { EntryRepository } from './EntryRepository';
import { Entry } from './EntryTypes';

export class EntryService {
    constructor(private readonly entryRepository: EntryRepository) {}

    async getEntriesByUserId(userId: string): Promise<Entry[]> {
        return await this.entryRepository.getEntriesByUserId(userId);
    }
}
