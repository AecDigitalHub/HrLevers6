import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from '../../node_modules/rxjs';
import { environment } from '../environments/environment';
import { map } from 'rxjs/operators';

const BASEURL = environment.BASEURL;


@Injectable()
export class EmployeeTalentService {

  constructor(private http: Http) {}

getTasksProgress(id): any {
  return this.http.get(`${BASEURL}/api/employees/${id}`).pipe(map(res => {
    const employee = res.json();
    let tasksDone = 0;
    for (let i = 0; i < employee.tasks.length; i++) {
      if (employee.tasks[i].Status === 'Done') {
        tasksDone ++;
      }
    }
    const tasksProgress = Number(tasksDone * 100 / employee.tasks.length);
    console.log(tasksProgress);
      return tasksProgress;
  }));
  }
  getEmployee(id) {
    return this.http.get(`${BASEURL}/api/employees/${id}`).pipe(map(res => {
      console.log(res.json());
      const employee = res.json();
      return employee;
   }));
  }
}
