import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employee = {
    firstname: '',
    lastname: '',
    address: '',
    tin: null,
    active: true
  }
  submitted = false;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  saveEmployee(): void {
    const data = {
      firstname: this.employee.firstname,
      lastname: this.employee.lastname,
      address: this.employee.address,
      tin: this.employee.tin,
      active: this.employee.active
    };

    this.employeeService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });

        // this.retrieveEmployees();
       
       

  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = {
    firstname: '',
    lastname: '',
    address: '',
    tin: null,
    active: true
    };
  }

}
