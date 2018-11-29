import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AddStudentComponent } from './addstudent/addstudent.component';

import { UserState } from './state/student.state';

import { CoreModule } from './@core/core.module';
import { StudentService } from './@Core/data/student.service';
import { HttpClientModule } from '@angular/common/http'; 

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgxsModule.forRoot([
      UserState
    ]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    CoreModule.forRoot()
  ],
  declarations: [AppComponent, HelloComponent, AddStudentComponent],
  bootstrap: [AppComponent],
  providers: [StudentService]
})
export class AppModule { }
