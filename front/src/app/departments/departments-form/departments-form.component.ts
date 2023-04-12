import { Component } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DepartmentsService } from '../services/departments.service';
import { Department } from '../model/department';
import { Observable, map } from 'rxjs';
import { Enterprise } from 'src/app/enterprises/model/enterprise';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-departments-form',
  templateUrl: './departments-form.component.html',
  styleUrls: ['./departments-form.component.css']
})
export class DepartmentsFormComponent {

  enterprises$: Observable<Enterprise[]>;


  form = this.formBuilder.group({
    _id:[''],
    createdby:['WhoCreatedTODO'],
    name: [''], //passar aspas simples demonstra uma string em branco, e o typescript infere que 'name' é do tipo string
    status: [''],
    description: [''],
    phone: [''],
    enterprise: ['']

  });

  constructor(
    private departmentsService : DepartmentsService,
    private formBuilder: NonNullableFormBuilder,
    private service: DepartmentsService,
    private location: Location,
    private route: ActivatedRoute,
    private http: HttpClient
    ) {

      this.enterprises$ = this.departmentsService.listEnterprises().pipe(map((enterprises: Enterprise[]) => enterprises));

      const department: Department = this.route.snapshot.data['department'];
      console.log(department);

      this.form.setValue({
        _id: department._id,
        createdby: department.createdBy,
        name: department.name,
        status: department.status,
        description: department.description,
        phone: department.phone,
        enterprise: department.enterprise
      });



  }

  onSubmit() {
    this.service.save(this.form.value).subscribe(result => console.log(result));
    this.onCancel();
  }

  onCancel() {
    this.location.back();
  }

}
