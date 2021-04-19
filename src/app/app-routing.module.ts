import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerOrderComponent } from './components/customer-order/customer-order.component';
import { CustomerComponent } from './components/customer/customer.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  { path:'home', component:HomeComponent},
  { path:'customer', component:CustomerComponent},
  { path:'employee', component:EmployeeComponent},
  { path:'product', component:ProductComponent},
  { path:'customerorder', component:CustomerOrderComponent},
  { path:'nav', component:NavComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
