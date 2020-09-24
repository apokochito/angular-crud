import { Component, OnInit } from '@angular/core';
import { Employee } from './../employee';
import { EmployeeService } from '../employee.service';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.sass']
})
export class EmployeeDetailsComponent implements OnInit {

  employee: any = {};
  submitted = false;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getEmployee(this.employeeService.getEmployeeFromSibling()).subscribe(data => this.employee = data);
  }

  updateEmployee(): void {
    console.log(this.employee._id, this.employee);
    this.employeeService.updateEmployee(this.employee._id, this.employee)
    .subscribe(data => this.employee = {
      _id: (data as any)._id,
      firstname: (data as any).firstname,
      lastname: (data as any).lastname,
      email: (data as any).email,
    }, error => console.log(error));
    this.employee = new Employee();
  };

  onSubmit() {
    this.submitted = true;
    console.log("onSubmit Method");
    this.updateEmployee();
  }

}
