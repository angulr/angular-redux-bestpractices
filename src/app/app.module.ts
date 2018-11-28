import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AddUserComponent } from './adduser/adduser.component';

import { UserState } from './state/user.state';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgxsModule.forRoot([
      UserState
    ]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    ReactiveFormsModule
  ],
  declarations: [AppComponent, HelloComponent, AddUserComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
