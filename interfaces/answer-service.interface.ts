import { Answer } from "../models/answer.model";
import { Question } from "../models/question.model";

export interface AnswerService {
    findAnswerToQuestion(question: Question): Answer
};