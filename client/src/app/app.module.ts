import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeesComponent } from './employees/employees.component';
import { Router, RouterModule } from '@angular/router';
import { routes } from './routes';
import { EmployeesService } from '../services/employees.service';
import { EmployeeTalentService } from '../services/employee-talent.service';
import { HttpModule } from '@angular/http';
import { FileSelectDirective } from 'ng2-file-upload';
import { EmployeeTalentProfileComponent } from './employee-talent-profile/employee-talent-profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeTalentProfileComponent,
    FileSelectDirective
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpModule,
    NgbModule
  ],
  providers: [EmployeesService, EmployeeTalentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
