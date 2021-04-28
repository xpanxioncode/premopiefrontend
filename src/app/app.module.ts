import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './components/customer/customer.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ProductComponent } from './components/product/product.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { AddEmployeeComponent } from './components/employee/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/employee/edit-employee/edit-employee.component';
import { EmployeeOrdersComponent } from './components/employee/employee-orders/employee-orders.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddCustomerComponent } from './components/customer/add-customer/add-customer.component';
import { EditCustomerComponent } from './components/customer/edit-customer/edit-customer.component';
import { OrdersComponent } from './components/orders/orders.component';
import { AddOrderComponent } from './components/orders/add-order/add-order.component';
import { EditOrderComponent } from './components/orders/edit-order/edit-order.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { ChartsModule } from 'ng2-charts';


//import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from  '@angular/material';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatInputModule} from '@angular/material/input'; 
import { MatCarouselModule } from '@ngmodule/material-carousel';


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    EmployeeComponent,
    ProductComponent,
    OrdersComponent,
    HomeComponent,
    NavComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    EmployeeOrdersComponent,
    AddCustomerComponent,
    EditCustomerComponent,
    OrdersComponent,
    AddOrderComponent,
    EditOrderComponent,
    BarChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    ChartsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
