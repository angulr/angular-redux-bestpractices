import { Component } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Student } from './models/Student';
import { Observable } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  students: Observable<Student>;

  constructor(private store: Store) {
    this.students = this.store.select(state => state.students.students);
   }

}
