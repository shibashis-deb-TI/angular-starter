import { Component, Input } from '@angular/core';
import { User } from 'src/app/types';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent {
  @Input() users!: User[];
}
