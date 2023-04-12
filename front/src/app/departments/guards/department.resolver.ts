import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Department } from '../model/department';
import { DepartmentsService } from '../services/departments.service';

@Injectable({
  providedIn: 'root'
})
export class DepartmentResolver implements Resolve<Department> {

  constructor(private service: DepartmentsService){

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Department> {
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
      address: '',
      name:'',
      description:'',
      enterprise:'',
      phone: ''});
  }
}
