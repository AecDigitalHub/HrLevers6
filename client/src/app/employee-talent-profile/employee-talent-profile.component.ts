import { Component, OnInit } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { ActivatedRoute } from '@angular/router';
import { Http, Response } from '@angular/http';
import { EmployeeTalentService } from '../../services/employee-talent.service';
import { EmployeesService } from '../../services/employees.service';
// const _ = require('lodash');

@Component({
  selector: 'app-employee-talent-profile',
  templateUrl: './employee-talent-profile.component.html',
  styleUrls: ['./employee-talent-profile.component.css']
})
export class EmployeeTalentProfileComponent implements OnInit {
employeeId: string;
employeeTalent: Observable<any>;
task: any;
editedTask: any;
tasksProgress: any;


  constructor(private employee: EmployeesService, private talentProfile: EmployeeTalentService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      (this.employeeId = params['id']),
        this.talentProfile
          .getEmployee(this.employeeId)
          .subscribe(res => (this.employee = res));
    });
    this.talentProfile.getTasksProgress(this.employeeId).subscribe(tasksprogress => {
      this.tasksProgress = parseFloat(tasksprogress.toFixed(2));
    });
  }

}
