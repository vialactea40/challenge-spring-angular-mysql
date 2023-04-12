import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { EmployeesService } from '../services/employees.service';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeResolver implements Resolve<Employee> {

  constructor(private service: EmployeesService){

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Employee> {
    if (route.params && route.params['id']) {
      return this.service.loadById(route.params['id']);
    }
    return of({
      _id:'',
      createdBy:'',
      createdDate: '' ,
      modifiedBy:'',
      modifiedDate: '',
      status: '',
      surname: '',
      email: '',
      age: 0,
      position: '',
      name:''});
  }
}
