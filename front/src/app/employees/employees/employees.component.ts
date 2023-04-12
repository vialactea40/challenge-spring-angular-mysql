import { Component } from '@angular/core';
import { EmployeesService } from '../services/employees.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {

  employees$: Observable<Employee[]>;
  displayedColumns = ['_id', 'name','phone','actions'];

  constructor(
    private employeesService : EmployeesService,
    private router: Router,
    private route: ActivatedRoute
    ) {
    this.employees$ = this.employeesService.list()
    console.log("O construtor está rodando");
  }

  refresh() {
    this.employees$ = this.employeesService.list()
    console.log("Dando refresh");
  }


  onAdd() {
    this.router.navigate(['new'], {relativeTo:this.route});
  }

  onEdit(element: Employee) {
    this.router.navigate(['edit', element._id], {relativeTo:this.route});
  }

  onDelete(element: Employee) {
    this.employeesService.remove(element._id).subscribe(result => console.log(result));
    this.refresh();
  }
}
