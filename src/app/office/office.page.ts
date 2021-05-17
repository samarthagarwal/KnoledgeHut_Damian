import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { RouteService } from '../route.service';

@Component({
  selector: 'app-office',
  templateUrl: './office.page.html',
  styleUrls: ['./office.page.scss'],
})
export class OfficePage implements OnInit {

  customer: any;

  constructor(private router: Router, private navCtrl: NavController, private activatedRoute: ActivatedRoute, private routeService: RouteService) { 
    // this.customer = this.routeService.getCustomerByIndex(this.activatedRoute.snapshot.params.id);
    this.customer = this.routeService.getCustomer();
    console.log(this.customer);
  }
  
  ngOnInit(): void {
    console.log("ngOnInit called!");
  }
  
  ngOnDestroy () {
    console.log("ngOnDestroy called!");
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

  navigateBack() {
    /* Method 1
    this.navCtrl.back();
    */

    /* Method 2*/
    this.navCtrl.setDirection("back");
    this.router.navigate(['/home']);
    /**/
  }


}
