import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './../employee.service';
import { Employee } from './../employee';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.sass']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  submitted = false;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = new Employee();
  }

  save() {
    this.employeeService.createEmployee(this.employee)
      .subscribe(data => this.employee = {
        id: (data as any).id,
        firstname: (data as any).firstname,
        lastname: (data as any).lastname,
        email: (data as any).email,
      }, error => console.log(error));
    this.employee = new Employee();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
