import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { RouteService } from '../route.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  customersBackup: any[] = [];
  customers: any[] = [];

  constructor(private toastCtrl: ToastController, private router: Router, private routeService: RouteService){

    this.customers = this.routeService.customers;

    for (let index = 0; index < this.customers.length; index++) {
      this.customersBackup.push(this.customers[index]);
    }
  }

  delete(customer: any): void {

    let position = -1;

    for (let index = 0; index < this.customers.length; index++) {
      if(this.customers[index].index == customer.index) {
        position = index;
        break;
      }
    }

    if(position >= 0) {
      this.customers.splice(position, 1);
    }
  }

  onRefresh(ev): void {

    // refresh the list

    setTimeout(() => {
      this.customers = [];

      for (let index = 0; index < this.customersBackup.length; index++) {
        this.customers.push(this.customersBackup[index]);
      }
      // done refreshing
      ev.target.complete();
    }, 1500)
    
  }

  loadMore(ev): void {
    console.log("Loading more data...");

    setTimeout(() => {

      if(this.customers.length > 45) {

        this.toastCtrl.create({
          message: "No more customers to display",
          duration: 3000
        }).then((toast) => {
          toast.present().then(() => {
            ev.target.disabled = true;
          })
        })

        return;
      }

      this.customers = this.customers.concat(this.customersBackup);

      ev.target.complete();



    }, 2000);
  }

  navigateToOffice(customer: any) {
    this.routeService.setCustomer(customer);
    this.router.navigate(['/office'])
  }
}
