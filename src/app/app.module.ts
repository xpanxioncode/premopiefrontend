import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './components/customer/customer.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ProductComponent } from './components/product/product.component';
import { CustomerOrderComponent } from './components/customer-order/customer-order.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { AddEmployeeComponent } from './components/employee/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/employee/edit-employee/edit-employee.component';
import { EmployeeOrdersComponent } from './components/employee/employee-orders/employee-orders.component';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
import { AddCustomerComponent } from './components/customer/add-customer/add-customer.component';
import { EditCustomerComponent } from './components/customer/edit-customer/edit-customer.component';
=======
import { OrdersComponent } from './components/orders/orders.component';
import { AddOrderComponent } from './components/orders/add-order/add-order.component';
import { EditOrderComponent } from './components/orders/edit-order/edit-order.component';
>>>>>>> b4a6a1ba784d35645d73883c5a2ba61af278e316


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    EmployeeComponent,
    ProductComponent,
    CustomerOrderComponent,
    HomeComponent,
    NavComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    EmployeeOrdersComponent,
<<<<<<< HEAD
    AddCustomerComponent,
    EditCustomerComponent
=======
    OrdersComponent,
    AddOrderComponent,
    EditOrderComponent
>>>>>>> b4a6a1ba784d35645d73883c5a2ba61af278e316
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
