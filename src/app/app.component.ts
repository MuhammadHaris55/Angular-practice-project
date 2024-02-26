import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { StudentListComponent } from './student-list/student-list.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { UserAuthModule } from './user-auth/user-auth.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserListComponent, StudentListComponent, TeacherListComponent, SubjectListComponent, UserAuthModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blog';

  functionCall() {
    alert('function call');
  }
  // alertName(name) {
  //   alert('My name is ' + name)
  // }
  // The above function didn't give error in Angular 9, 10, 11 
    // but for Angular 12 we must have to define the dataType of our variables
    // because in Angular 12 strict mode is true in tsconfig.json in Angular 12
    // so the compiler strictly folow the rules, we can make it false to avoid these strictness of rules
  alertName(name:string) {
    alert('My name is ' + name)
  }
}
