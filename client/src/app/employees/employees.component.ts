import { Component, OnInit } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { Http, Response } from '@angular/http';
import { EmployeesService } from '../../services/employees.service';
import { ActivatedRoute } from '@angular/router';
import { ClrDatagridStateInterface} from '@clr/angular';



@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
listEmployees: Observable<Array<Object>>;
total: number;
loading: true;

  constructor(public employees: EmployeesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.employees.getEmployees().subscribe((employees) => {
      console.log(employees);
      this.listEmployees = employees;
    });
  }
}
