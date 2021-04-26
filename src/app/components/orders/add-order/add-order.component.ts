import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';


@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {

  

  orders = {
    customerid: '',
    employeeid: '',
    timeordercreated: Date,
    total: null
  }

  quantitySoda : number = 0;
  submitted = false;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    
  }


  saveOrder(): void {
    const data = {
      customerid: this.orders.customerid,
      employeeid: this.orders.employeeid,
      timeordercreated: this.orders.timeordercreated,
      total: this.orders.total
    };

    console.log(data);
  

    this.orderService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });

        // this.retrieveEmployees();
       
        this.newOrders();
        
       

  }

  calculatePrice(){
    this.quantitySoda = parseFloat((<HTMLInputElement>document.getElementById("quantitySoda")).value);
    console.log(this.quantitySoda);
  }

  newOrders(): void {
    this.submitted = false; 
    this.orders = {
      customerid: '',
      employeeid: '',
      timeordercreated: Date,
      total: null
    };
  }

}


