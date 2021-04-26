import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  customer = {
    firstname: '',
    lastname: '',
    address: '',
    phonenumber: '',
    zip: null
  }
  submitted = false;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
  }

  saveCustomer(): void {
    const data = {
      firstname: this.customer.firstname,
      lastname: this.customer.lastname,
      address: this.customer.address,
      phonenumber: this.customer.phonenumber,
      zip: this.customer.zip
    };

    this.customerService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });

        // this.retrieveCustomers();

        
       
        this.newCustomer();
       

  }

  newCustomer(): void {
    this.submitted = false;
    this.customer = {
      firstname: '',
      lastname: '',
      address: '',
      phonenumber: '',
      zip: null
    }
  }

}