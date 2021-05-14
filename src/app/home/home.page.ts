import { Component } from '@angular/core';
import { LoadingController, ToastController, AlertController, ActionSheetController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private loadingCtrl: LoadingController, private toastCtrl: ToastController, private alertCtrl: AlertController, private actionsheetCtrl: ActionSheetController, private platfrom: Platform){
    
  }

  showLoading(): void {
    this.loadingCtrl.create({
      spinner: "circles",
      message: "Loading..."
    }).then((loading) => {
      console.log("loading controller created!");

      loading.present();

      // fake network request for 3 seconds

      setTimeout(() => {
        loading.dismiss();
      }, 3000);


    }).catch((reason) => {
      console.log("loading controller creation failed!");
    }).finally(() => {
      console.log("loading controller code executed!");
    });
  }

  showToast(): void {
    this.toastCtrl.create({
      header: "Account Created",
      message: "Your account has been created successfully.",
      position: "bottom",
      color: "danger",
      buttons: [{
        text: "Yeah",
        icon: "checkmark-outline",
        side: "end",
        role: "success",
        handler: () => {
          console.log("You tapped on YEAH!");
          return true;
        }
      }]
    }).then((toast) => {
      toast.present();
    })
  }

  showAlert(): void {
    this.alertCtrl.create({
      header: "iCloud",
      subHeader: "Enter your password",
      message: "Please enter the password for your Apple ID to continue.",
      inputs: [ {
        type: "checkbox",
        name: "remember",
        label: "Remember Me",
        handler: (input) => {
          console.log(input.checked);
        }
      }],
      buttons: [, {
        text: "Continue",
        handler: (data) => {
          console.log(data);
          if(data.password.length < 3) {
            return false;
          }
        }
      }, {
        text: "Cancel",
        role: "cancel"
      }],
      backdropDismiss: true
    }).then((alert) => {
      alert.present();
    })
  }

  showActionSheet(): void {

    this.actionsheetCtrl.create({
      header: "Choose your color",
      subHeader: "Select your favorite color from the list",
      buttons: [{
        text: "Red",
        handler: () => {
          console.log("You tapped on Red");
        }
      }, {
        text: "Green",
        handler: () => {
          console.log("You tapped on Green");
        }
      }, {
        text: "Blue",
        handler: () => {
          console.log("You tapped on Blue");
        }
      }, {
        text: "Cancel",
        role: "cancel",
        handler: () => {
          console.log("You tapped on Cancel");
        }
      }],
      backdropDismiss: false
    }).then((actionsheet) => {
      actionsheet.present();
    })
  }

}
