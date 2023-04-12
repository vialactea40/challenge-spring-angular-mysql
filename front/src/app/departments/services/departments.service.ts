import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Department } from '../model/department';
import { Enterprise } from 'src/app/enterprises/model/enterprise';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  private readonly API = 'api/departments';
  private readonly APIenterprise = 'api/enterprises';

  constructor(private httpClient: HttpClient) {}

  listEnterprises() {
    return this.httpClient.get<Enterprise[]>(this.APIenterprise)
    .pipe(
      tap(departments => console.log)
    );
  }

  list() {
    return this.httpClient.get<Department[]>(this.API)
    .pipe(
      tap(departments => console.log)
    );
  }

  loadById(id: string) {
    return this.httpClient.get<Department>(`${this.API}/${id}`);
  }

  save(record: Partial<Department>) {
    console.log(record);
    if (record._id) {
      console.log('update');
      return this.update(record);
    }
      console.log('create');
      return this.create(record);

  }

  private create(record: Partial<Department>) {
    return this.httpClient.post<Department>(this.API, record);
  }

  private update(record: Partial<Department>) {
    return this.httpClient.put<Department>(`${this.API}/${record._id}`, record);
  }

  remove(id: string) {
    console.log("O remove do services está sendo chamado para " + `${this.API}/${id}`);
    console.log (this.httpClient.delete(`${this.API}/${id}`));
    return this.httpClient.delete(`${this.API}/${id}`);
  }
}
