import { Component } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { EnterprisesService } from '../services/enterprises.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Enterprise } from '../model/enterprise';


@Component({
  selector: 'app-enterprises-form',
  templateUrl: './enterprises-form.component.html',
  styleUrls: ['./enterprises-form.component.css']
})
export class EnterprisesFormComponent {

  form = this.formBuilder.group({
    _id:[''],
    createdby:['WhoCreatedTODO'],
    name: [''], //passar aspas simples demonstra uma string em branco, e o typescript infere que 'name' é do tipo string
    status: [''],
    address: [''],
    phone: ['']
  });

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private service: EnterprisesService,
    private location: Location,
    private route: ActivatedRoute
    ) {


      const enterprise: Enterprise = this.route.snapshot.data['enterprise'];
      console.log(enterprise);

      this.form.setValue({
        _id: enterprise._id,
        createdby: enterprise.createdBy,
        name: enterprise.name,
        status: enterprise.status,
        address: enterprise.address,
        phone: enterprise.phone
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
