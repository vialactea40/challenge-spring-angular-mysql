import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {


  private readonly API = 'api/employees';

  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<Employee[]>(this.API)
    .pipe(
      tap(employees => console.log)
    );
  }

  loadById(id: string) {
    return this.httpClient.get<Employee>(`${this.API}/${id}`);
  }

  save(record: Partial<Employee>) {
    console.log(record);
    if (record._id) {
      console.log('update');
      return this.update(record);
    }
      console.log('create');
      return this.create(record);

  }

  private create(record: Partial<Employee>) {
    return this.httpClient.post<Employee>(this.API, record);
  }

  private update(record: Partial<Employee>) {
    return this.httpClient.put<Employee>(`${this.API}/${record._id}`, record);
  }

  remove(id: string) {
    console.log("O remove do services está sendo chamado para " + `${this.API}/${id}`);
    console.log (this.httpClient.delete(`${this.API}/${id}`));
    return this.httpClient.delete(`${this.API}/${id}`);
  }
}
