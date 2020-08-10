import "reflect-metadata";
import { Container } from "inversify";
import { TYPES } from "./types";
import { AirtableService } from "./interfaces/airtable-service.interface";
import { AirtableServiceImplementation } from "./services/airtable-service.class";
import { AnswerService } from "./interfaces/answer-service.interface";
import { AnswerServiceImplementation } from "./services/answer-service.class";
import { QuestionService } from "./interfaces/question-service.interface";
import { QuestionServiceImplementation } from "./services/question-service.class";
import { BotService } from "./interfaces/bot-service.interface";
import { BotServiceImplementation } from "./services/bot-service.class";

const myContainer = new Container();
myContainer.bind<AirtableService>(TYPES.AirtableService).to(AirtableServiceImplementation);
myContainer.bind<AnswerService>(TYPES.AnswerService).to(AnswerServiceImplementation);
myContainer.bind<QuestionService>(TYPES.QuestionService).to(QuestionServiceImplementation);
myContainer.bind<BotService>(TYPES.BotService).to(BotServiceImplementation);


module.exports = {
    airtable: myContainer.get<AirtableService>(TYPES.AirtableService),
    answers: myContainer.get<AnswerService>(TYPES.AnswerService),
    questions: myContainer.get<QuestionService>(TYPES.QuestionService),
    bot: myContainer.get<BotService>(TYPES.BotService)
}