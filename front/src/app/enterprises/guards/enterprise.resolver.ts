import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { EnterprisesService } from '../services/enterprises.service';
import { Enterprise } from '../model/enterprise';

@Injectable({
  providedIn: 'root'
})
export class EnterpriseResolver implements Resolve<Enterprise> {

  constructor(private service: EnterprisesService){

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Enterprise> {
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
      phone: ''});
  }
}
