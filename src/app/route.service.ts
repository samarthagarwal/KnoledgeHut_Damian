import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  customers: any[] = [];

  selectedCustomer: any;

  constructor(private httpClient: HttpClient) {
    this.getCustomers();
  }

  getCustomers(): Observable<any> {
    // let customersData = await this.httpClient.get("http://www.json-generator.com/api/json/get/bPJDNOEfVK?indent=2").toPromise<any>();
    // this.customers = customersData;
    // return customersData;

    let customersObs = this.httpClient.get("http://www.json-generator.com/api/json/get/bPJDNOEfVK?indent=2");
    return customersObs;

  }

  setCustomer(customer) {
    this.selectedCustomer = customer;
  }

  getCustomer() {
    return this.selectedCustomer;
  }

  getCustomerByIndex(idx: number) {
    for (let index = 0; index < this.customers.length; index++) {
      if(this.customers[index].index == idx) {
        return this.customers[index];
      }
    }
  }
}
