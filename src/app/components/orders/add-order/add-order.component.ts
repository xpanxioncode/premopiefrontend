import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';


@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {


  itemprice = {
    breadsticks: 2.50,
    soda: 3.25,
    sPP: 7.35,
    mPP: 9.35,
    lPP: 14.00,
    sHP: 8.50,
    mHP: 10.50,
    lHP: 16.00
  }
   


  quantities = {
    quantitySoda: 0,
    quantityBreadSticks: 0,
    quantitysPP: 0,
    quantitymPP: 0,
    quantitylPP: 0,
    quantitysHP: 0,
    quantitymHP: 0,
    quantitylHP: 0,
  }

  orders = {
    customerid: '',
    employeeid: '',
    timeordercreated: Date,
    total: null
  }

  submitted = false;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    
  }


  saveOrder(): void {
    this.calculateTotal();
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

  calculateTotal(){
    
    this.orders.total =  (this.itemprice.soda * this.quantities.quantitySoda) + 
      (this.itemprice.breadsticks * this.quantities.quantityBreadSticks) + 
      (this.itemprice.sPP * this.quantities.quantitysPP) +
      (this.itemprice.mPP * this.quantities.quantitymPP) +
      (this.itemprice.lPP * this.quantities.quantitylPP) +
      (this.itemprice.sHP * this.quantities.quantitysHP) +
      (this.itemprice.mHP * this.quantities.quantitymHP) +
      (this.itemprice.lHP * this.quantities.quantitylHP);
    
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


