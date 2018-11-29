import { State, Action, StateContext, Selector, Store } from '@ngxs/store';
import { Student } from '../../models/Student';
import { AddStudent } from '../../actions/student.action';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserState, StudentStateModel } from '../student.state';
import { PersonService } from '../../@Core/data/person.service';



@State<StudentStateModel>({
    name: 'students',
    defaults: {
        students: []
    }
})

export class StudentServiceState extends UserState {
    constructor(private customerService: PersonService, private store: Store) {
        super();
    }

}