import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

import { Enterprise } from '../model/enterprise';

@Injectable({
  providedIn: 'root'
})
export class EnterprisesService {

  private readonly API = 'api/enterprises';

  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<Enterprise[]>(this.API)
    .pipe(
      tap(enterprises => console.log)
    );
  }

  loadById(id: string) {
    return this.httpClient.get<Enterprise>(`${this.API}/${id}`);
  }

  save(record: Partial<Enterprise>) {
    console.log(record);
    if (record._id) {
      console.log('update');
      return this.update(record);
    }
      console.log('create');
      return this.create(record);

  }

  private create(record: Partial<Enterprise>) {
    return this.httpClient.post<Enterprise>(this.API, record);
  }

  private update(record: Partial<Enterprise>) {
    return this.httpClient.put<Enterprise>(`${this.API}/${record._id}`, record);
  }

  remove(id: string) {
    return this.httpClient.delete(`${this.API}/${id}`);
  }
}
