import { Customer } from "./customer";
import { Employee } from "./employee";
export interface Order {
    orderid?: number;
    customer: Customer;
    employee: Employee;
    timeordercreated: Date;
    total: number;
}