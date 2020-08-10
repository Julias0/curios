import { AnswerService } from "../interfaces/answer-service.interface";
import { injectable } from "inversify";
import { Question } from "../models/question.model";
import { Answer } from "../models/answer.model";

@injectable()
export class AnswerServiceImplementation implements AnswerService {
    findAnswerToQuestion(question: Question): Answer {
        throw new Error("Method not implemented.");
    }
    
}