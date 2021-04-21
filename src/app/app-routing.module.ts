import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerOrderComponent } from './components/customer-order/customer-order.component';
import { CustomerComponent } from './components/customer/customer.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { ProductComponent } from './components/product/product.component';
import { AddEmployeeComponent } from './components/employee/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/employee/edit-employee/edit-employee.component';
import { EmployeeOrdersComponent } from './components/employee/employee-orders/employee-orders.component';


const routes: Routes = [
  { path:'home', component:HomeComponent},
  { path:'customer', component:CustomerComponent},
  { path:'employee', component:EmployeeComponent},
  { path:'product', component:ProductComponent},
  { path:'customerorder', component:CustomerOrderComponent},
  { path:'nav', component:NavComponent},
  {path: 'employees/add', component: AddEmployeeComponent},
  {path: 'employees/:id', component: EditEmployeeComponent},   
  {path: 'employees/orders/:id', component: EmployeeOrdersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
