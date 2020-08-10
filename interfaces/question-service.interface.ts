import { Question } from "../models/question.model";

export interface QuestionService {
    findMostRelevantQuestion(question: string): Question
};