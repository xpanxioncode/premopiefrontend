import { Customer } from "./customer";
import { Employee } from "./employee";
export interface Order {
    orderid?: number;
    customerid: Customer;
    employeeid: Employee;
    timeordercreated: Date;
    total: number;
}