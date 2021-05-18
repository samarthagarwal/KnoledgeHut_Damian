import { Component } from '@angular/core';
import { LoadingController, ModalController, PopoverController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { RouteService } from '../route.service';
import { AddModalPage } from '../add-modal/add-modal.page';
import { MenuPage } from '../menu/menu.page';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  customersBackup: any[] = [];
  customers: any[] = [];

  customersData: Observable<any>;
  date: Date = new Date();

  constructor(private toastCtrl: ToastController, private router: Router, private routeService: RouteService, private modalCtrl:  ModalController, private popoverCtrl: PopoverController, private loadingCtrl: LoadingController){
    this.initialize()
  }

  async initialize() {

    let loading = await this.loadingCtrl.create({
      message: "Getting customers data...",
      spinner: "circles"
    });

    loading.present();

    this.customersData = await this.routeService.getCustomers();

    for (let index = 0; index < this.customers.length; index++) {
      this.customersBackup.push(this.customers[index]);
    }

    loading.dismiss();
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

  showAddDialog() {
    this.modalCtrl.create({
      component: AddModalPage,
      componentProps: {
        "name": "Samarth Agarwal"
      },
      swipeToClose: true
    }).then((modal) => {

      modal.onDidDismiss().then((data) => {
        console.log(data);
      })

      modal.present();
    })
  }

  showMenuPopover(ev) {
    this.popoverCtrl.create({
      component: MenuPage,
      componentProps: {},
      event: ev
    }).then((popover) => {

      popover.onDidDismiss().then((data) => {
        console.log("You selected " + data.data.option);
      })

      popover.present();
    })
  }

  ionViewWillEnter() {
    console.log("ionViewWillEnter called!");
  }

  ionViewDidEnter() {
    console.log("ionViewDidEnter called!");
  }

  ionViewWillLeave() {
    console.log("ionViewWillLeave called!");
  }

  ionViewDidLeave() {
    console.log("ionViewDidLeave called!");
  }
}
