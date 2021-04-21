import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  currentEmp = null;
  msg = '';

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {  }


  ngOnInit(): void {
    this.msg = '';
    this.getEmployee(this.route.snapshot.paramMap.get('id'));

  }
  getEmployee(employeeid): void {
    this.employeeService.get(employeeid)
    .subscribe(
      data => {
        this.currentEmp = data;
        console.log(data);
        console.log("Hello!");
      },
      error => {
        console.log(error)
      });
  }

  updateEmployee(): void {
    this.employeeService.update(this.currentEmp.employeeid, this.currentEmp)
    .subscribe(
      response => {
        console.log(response);
        this.msg = 'The employee has been updated successfully!';
        console.log(this.msg);
       
        
      },
      error => {
        console.log(error);
      }
    );
  }

  updateActive(status): void {
    const data = {
      firstname: this.currentEmp.firstname,
      lastname: this.currentEmp.lastname,
      address: this.currentEmp.address,
      tin: this.currentEmp.tin,
      active: status
    }

    this.employeeService.update(this.currentEmp.id, data)
      .subscribe(
        response => {
          this.currentEmp.active = status;
          console.log(response);
        },
        error => {
          console.log(error)
        }
      );
  }

  deleteEmployee(): void {
    this.employeeService.delete(this.currentEmp.employeeid)
      .subscribe (
        response => {
          console.log(response);
          this.router.navigate(['/employees']);
        },
        error => {
          console.log(error);
        }
      );
  }




}
