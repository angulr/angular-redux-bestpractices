import { Component } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Student } from './models/Student';
import { StudentService } from './@Core/data/student.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  students: Observable<Student>;

  constructor(private store: Store, private studentService: StudentService) {
    this.students = this.store.select(state => state.students.students);

    studentService.getStudents().subscribe((res) => {
      console.log(res)
    })
  }

}
