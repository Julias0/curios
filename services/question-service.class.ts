import { QuestionService } from "../interfaces/question-service.interface";
import { injectable } from "inversify";
import { Question } from "../models/question.model";

@injectable()
export class QuestionServiceImplementation implements QuestionService {
    findMostRelevantQuestion(question: string): Question {
        throw new Error("Method not implemented.");
    }
}