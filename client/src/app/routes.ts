import { Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeTalentProfileComponent } from './employee-talent-profile/employee-talent-profile.component';

export const routes: Routes = [
  { path: '', component: EmployeesComponent},
  { path: 'talent-profile/:id', component: EmployeeTalentProfileComponent},
];
