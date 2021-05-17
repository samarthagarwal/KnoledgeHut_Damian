import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.page.html',
  styleUrls: ['./add-modal.page.scss'],
})
export class AddModalPage implements OnInit {

  constructor(private navParams: NavParams, private modalController: ModalController) { 
    console.log(this.navParams.get("name"));
  }

  ngOnInit() {
  }

  close() {
    console.log("Closing...");
    this.modalController.dismiss({
      'name': "Damian"
    });
  }

}
