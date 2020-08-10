export interface BotService {
    askQuestion(question: string): Promise<string>;
    whatCanIAsk(): Promise<[string]>;
}