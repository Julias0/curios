import { AirtableService } from "../interfaces/airtable-service.interface";
import Airtable from 'airtable';
import { injectable } from 'inversify';

@injectable()
export class AirtableServiceImplementation implements AirtableService {
    base: any;
    getAllRecords(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.base('Table 1').select({
                view: 'Grid view'
            }).firstPage(function(err, records) {
                if (err) { reject(err) }
                resolve(records);
            });
        });
    }
    constructor() {
        this.base = new Airtable({apiKey: process.env.AIRTABLE_KEY}).base('appKSNUfv12DxtPLi');
    }
}