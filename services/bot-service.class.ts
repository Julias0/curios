import { BotService } from "../interfaces/bot-service.interface";
import { injectable, inject } from "inversify";
import { TYPES } from "../types";
import { AirtableService } from "../interfaces/airtable-service.interface";

@injectable()
export class BotServiceImplementation implements BotService{
    @inject(TYPES.AirtableService) private AirtableService: AirtableService;

    async askQuestion(question: string): Promise<string> {
        let records = await this.AirtableService.getAllRecords();
        console.log(records);
        return records;
    }    
    
    
    whatCanIAsk(): Promise<[string]> {
        return new Promise((resolve)=> {
            resolve([
                'What movies can I watch this weekend?'
            ]);
        });
    }
}