import { Component } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { EmployeesService } from '../services/employees.service';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../model/employee';
import { Location } from '@angular/common';


@Component({
  selector: 'app-employees-form',
  templateUrl: './employees-form.component.html',
  styleUrls: ['./employees-form.component.css']
})
export class EmployeesFormComponent {


  form = this.formBuilder.group({
    _id:[''],
    createdby:['WhoCreatedTODO'],
    name: [''], //passar aspas simples demonstra uma string em branco, e o typescript infere que 'name' é do tipo string
    status: [''],
    surname: [''],
    email: [''],
    position: [''],
    age: [0]
  });

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private service: EmployeesService,
    private location: Location,
    private route: ActivatedRoute
    ) {


      const employee: Employee = this.route.snapshot.data['employee'];
      console.log(employee);

      this.form.setValue({
        _id: employee._id,
        createdby: employee.createdBy,
        name: employee.name,
        status: employee.status,
        surname: employee.surname,
        email: employee.email,
        position: employee.position,
        age: employee.age
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
