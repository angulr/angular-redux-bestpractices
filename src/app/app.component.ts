import { Component } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { User } from './models/User';
import { Observable } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  users: Observable<User>;

  constructor(private store: Store) {
    this.users = this.store.select(state => state.users.users);
   }

}
