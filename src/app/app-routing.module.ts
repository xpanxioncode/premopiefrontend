import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './components/customer/customer.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { ProductComponent } from './components/product/product.component';
import { AddEmployeeComponent } from './components/employee/add-employee/add-employee.component';
import { AddCustomerComponent } from './components/customer/add-customer/add-customer.component';
import { EditEmployeeComponent } from './components/employee/edit-employee/edit-employee.component';
import { EmployeeOrdersComponent } from './components/employee/employee-orders/employee-orders.component';
import { EditCustomerComponent } from './components/customer/edit-customer/edit-customer.component';
import { OrdersComponent } from './components/orders/orders.component';
import { AddOrderComponent } from './components/orders/add-order/add-order.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';

const routes: Routes = [
  { path:'home', component:HomeComponent},
  { path:'customer', component:CustomerComponent},
  { path:'customers/add', component:AddCustomerComponent},
  { path:'employee', component:EmployeeComponent},
  { path:'product', component:ProductComponent},
  { path:'orders', component:OrdersComponent},
  { path:'orders/add', component:AddOrderComponent},
  { path:'nav', component:NavComponent},
  {path: 'employees/add', component: AddEmployeeComponent},
  {path: 'employees/:id', component: EditEmployeeComponent},  
  {path: 'customers/:id', component: EditCustomerComponent}, 
  {path: 'employees/orders/:id', component: EmployeeOrdersComponent},
  {path: 'chart', component: BarChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
