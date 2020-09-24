import { Component, OnInit } from '@angular/core';
import { Employee } from './../employee';
import { EmployeeService } from '../employee.service';

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

  updateEmployee() {
    this.employeeService.updateEmployee(this.employee._id, this.employee)
    .subscribe(data => {
      console.log("Employee Updated")
    }, error => console.log(error));
    this.employee = new Employee();
  };

  onSubmit() {
    this.submitted = true;
    this.updateEmployee();
  }

}
