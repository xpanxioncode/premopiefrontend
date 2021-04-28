import { DatePipe } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatPaginator } from '@angular/material/paginator';
import { MatSelectChange } from '@angular/material/select';
import { MatTableDataSource } from '@angular/material/table';
import { OrderService } from 'src/app/services/order.service';

export interface Order {
  orderId: number;
  customer: object;
  employee: object;
  timeordercreated: Date;
  total: number;
}
@Component({
  selector: 'app-order',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  displayedColumns: string[] = ['orderid', 'customerid', 'employeeid', 'date', 'zipCode', 'total']
  orders: Order [] = [];
  ordersTotal = 0;
  dataSource: MatTableDataSource<Order>;
  pipe: DatePipe;
  zips = [55501, 55502, 55503, 55504]
  zipCode: number = null;
  endDate:  Date = null;
  startDate: Date = null;
  
  filterForm = new FormGroup({
    fromDate: new FormControl(),
    toDate: new FormControl(),
  });
  constructor(private orderService: OrderService) { }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit(): void {
    this.retrieveOrders();
  }
  retrieveOrders(): void {
    this.orderService.getAll()
      .subscribe(data => {
        console.log(data);
        this.orders = data;
        this.orders.forEach(order => {
          console.log(order);
          this.ordersTotal += order.total;
        })
        this.dataSource = new MatTableDataSource<Order>(this.orders);
      },
      error => {
        console.log(error);
      });
  }
 
  saveZipCode(event: MatSelectChange) {
    this.zipCode = event.value;
  }
  
  saveStartDate(event: MatDatepickerInputEvent<Date>) {
    this.startDate = event.value;
  }

  saveEndDate(event: MatDatepickerInputEvent<Date>) {
    this.endDate = event.value;
  }

  applyFilter() {
    let temp = [];
    this.ordersTotal = 0;

    if(this.zipCode) {
        this.ordersTotal = 0;
        this.orders.forEach(order => {
          if(order.customer['zipCode'] == this.zipCode) {
            temp.push(order);
            this.ordersTotal += order.total;
          }
        })
    } else {
      temp = this.orders; //?
    }

    let tempDate = [];
    if(this.startDate && this.endDate) {
      this.ordersTotal = 0;
      temp.forEach(order => {
        if(new Date(order.timeordercreated) >= this.startDate && new Date(order.timeordercreated) <= this.endDate) {
          tempDate.push(order);
          this.ordersTotal += order.total;
        }
      })
    } else {
      tempDate = temp;
    }
    this.dataSource = new MatTableDataSource<Order>(tempDate);
    this.dataSource.paginator = this.paginator;
  }

  clearFilter() {
    this.ordersTotal = 0;
    this.startDate = null;
    this.endDate = null;
    this.zipCode = null;
    this.orders.forEach(order => {
      this.ordersTotal += order.total;
    })
    this.dataSource = new MatTableDataSource<Order>(this.orders);
    this.dataSource.paginator = this.paginator;
  }




}