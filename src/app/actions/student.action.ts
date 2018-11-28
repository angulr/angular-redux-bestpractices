import { Student } from '../models/Student';

export class AddStudent {
    static readonly type = '[Student] Add';
    constructor(public payload: Student) {}
}