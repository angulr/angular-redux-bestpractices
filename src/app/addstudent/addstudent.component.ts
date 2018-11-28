import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AddStudent } from '../actions/student.action';

@Component({
  selector: 'addstudent',
  templateUrl: './addstudent.component.html'
})
export class AddStudentComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required]
    });
  }

  addStudent(firstname, lastname) {
    this.store.dispatch(new AddStudent({ firstname, lastname }))
      .subscribe(() => { this.form.reset() });
  }

  ngOnInit() {
  }
}
