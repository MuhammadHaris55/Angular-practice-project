import { Component } from '@angular/core';

@Component({
  selector: 'app-subject-list',
  standalone: true,
  imports: [],
  template: `
    <h2 class="custom">
      subject-list works!
    </h2>
  `,
  styles: `
    .custom {
      color: green
    }
  `
})
export class SubjectListComponent {

}
