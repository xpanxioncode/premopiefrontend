import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  currentCustomer = null;
  msg = '';

  constructor(
    private customerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router
  ) {  }


  ngOnInit(): void {
    this.msg = '';
    this.getCustomer(this.route.snapshot.paramMap.get('id'));

  }
  getCustomer(customerid): void {
    this.customerService.get(customerid)
    .subscribe(
      data => {
        this.currentCustomer = data;
        console.log(data);
        console.log("Hello!");
      },
      error => {
        console.log(error)
      });
  }

  updateCustomer(): void {
    this.customerService.update(this.currentCustomer.customerid, this.currentCustomer)
    .subscribe(
      response => {
        console.log(response);
        this.msg = 'The customer has been updated successfully!';
        console.log(this.msg);
       
        
      },
      error => {
        console.log(error);
      }
    );
  }

  updateActive(status): void {
    const data = {
      firstname: this.currentCustomer.firstname,
      lastname: this.currentCustomer.lastname,
      address: this.currentCustomer.address,
      phonenumber: this.currentCustomer.phonenumber,
      zip: this.currentCustomer.zip
    }

    this.customerService.update(this.currentCustomer.id, data)
      .subscribe(
        response => {
          this.currentCustomer.active = status;
          console.log(response);
        },
        error => {
          console.log(error)
        }
      );
  }

  deleteCustomer(): void {
    this.customerService.delete(this.currentCustomer.customerid)
      .subscribe (
        response => {
          console.log(response);
          this.router.navigate(['/customers']);
        },
        error => {
          console.log(error);
        }
      );
  }




}
