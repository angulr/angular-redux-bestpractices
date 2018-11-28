import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Student } from '../models/Student';
import { AddStudent } from '../actions/student.action';

export class StudentStateModel {
    students: Student[];
}

@State<StudentStateModel>({
    name: 'students',
    defaults: {
        students: []
    }
})
export class UserState {

    @Selector()
    static getUsers(state: StudentStateModel) {
        return state.students;
    }

    @Action(AddStudent)
    add({getState, patchState }: StateContext<StudentStateModel>, { payload }: AddStudent) {
        const state = getState();
        patchState({
            students: [...state.students, payload]
        });
    }
}