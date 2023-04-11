import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Enterprise } from '../model/enterprise';
import { EnterprisesService } from '../services/enterprises.service';

@Component({
  selector: 'app-enterprises',
  templateUrl: './enterprises.component.html',
  styleUrls: ['./enterprises.component.css']
})
export class EnterprisesComponent {

  enterprises$: Observable<Enterprise[]>;
  displayedColumns = ['_id', 'name','phone','actions'];

  constructor(
    private enterprisesService : EnterprisesService,
    private router: Router,
    private route: ActivatedRoute
    ) {
    this.enterprises$ = this.enterprisesService.list()
    console.log("O construtor está rodando");
  }

  refresh() {
    this.enterprises$ = this.enterprisesService.list()
    console.log("Dando refresh");
  }


  onAdd() {
    this.router.navigate(['new'], {relativeTo:this.route});
  }

  onEdit(element: Enterprise) {
    this.router.navigate(['edit', element._id], {relativeTo:this.route});
  }

  onDelete(element: Enterprise) {
    this.enterprisesService.remove(element._id).subscribe(result => console.log(result));
    this.refresh();
  }
}
