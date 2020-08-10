import { Question } from "./question.model";
import { User } from "./user.model";

export class Answer {
    question: Question;
    statement: string;
    answered_by: User;
}