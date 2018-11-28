import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AddUser } from '../actions/user.action';

@Component({
  selector: 'adduser',
  templateUrl: './adduser.component.html'
})
export class AddUserComponent implements OnInit  {
   form: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required ],
      email: ['', Validators.required ]
   });
  }

  addUser(name, email) {
     this.store.dispatch(new AddUser({ name, email}))
      .subscribe(() => { this.form.reset() });
  }

  ngOnInit() {
  }
}
