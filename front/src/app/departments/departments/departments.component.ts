import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Department } from '../model/department';
import { DepartmentsService } from '../services/departments.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent {

  departments$: Observable<Department[]>;
  displayedColumns = ['_id', 'name','phone','enterprise','actions'];

  constructor(
    private departmentsService : DepartmentsService,
    private router: Router,
    private route: ActivatedRoute
    ) {
    this.departments$ = this.departmentsService.list()
    console.log("O construtor está rodando");
  }

  refresh() {
    this.departments$ = this.departmentsService.list()
    console.log("Dando refresh");
  }


  onAdd() {
    this.router.navigate(['new'], {relativeTo:this.route});
  }

  onEdit(element: Department) {
    this.router.navigate(['edit', element._id], {relativeTo:this.route});
  }

  onDelete(element: Department) {
    this.departmentsService.remove(element._id).subscribe(result => console.log(result));
    this.refresh();
  }
}
