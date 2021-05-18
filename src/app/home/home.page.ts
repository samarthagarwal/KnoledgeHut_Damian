import { Component } from '@angular/core';
import { LoadingController, ModalController, PopoverController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { RouteService } from '../route.service';
import { AddModalPage } from '../add-modal/add-modal.page';
import { MenuPage } from '../menu/menu.page';
import { Observable } from 'rxjs';
import { Plugins, CameraResultType, CameraDirection, CameraOptions } from '@capacitor/core';

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
  location: import("/Users/samarthagarwal/Desktop/KnowledgeHut/KnowledgeHut/node_modules/@capacitor/core/dist/esm/core-plugin-definitions").GeolocationPosition;
  base64: string;

  constructor(private toastCtrl: ToastController, private router: Router, private routeService: RouteService, private modalCtrl:  ModalController, private popoverCtrl: PopoverController, private loadingCtrl: LoadingController){
    this.initialize()
    this.setupGeolocation();
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

  async setupGeolocation() {
    const { Geolocation } = Plugins;

    this.location = await Geolocation.getCurrentPosition();

    let toast = await this.toastCtrl.create({
      message: "Your location is (" + this.location.coords.latitude + ", " + this.location.coords.longitude + ")",
      duration: 5000
    });

    toast.present();
  }

  async takePhoto() {
    const { Camera } = Plugins;

    let cameraOptions: CameraOptions = {
      quality: 50,
      direction: CameraDirection.Rear,
      resultType: CameraResultType.Base64,
      width: 512,
      height: 512,
    }

    let photo =  (await Camera.getPhoto(cameraOptions));
    console.log(photo);
    this.base64 = photo.base64String;
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
