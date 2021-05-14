import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  customersBackup: any[] = [];
  customers: any[] = [{
    "index": 0,
    "isActive": false,
    "balance": "$1,683.88",
    "picture": "https://robohash.org/Salas",
    "name": "Monroe Martinez",
    "gender": "male"
  },
  {
    "index": 1,
    "isActive": true,
    "balance": "$2,321.36",
    "picture": "https://robohash.org/Dyer",
    "name": "Avery Warner",
    "gender": "male"
  },
  {
    "index": 2,
    "isActive": true,
    "balance": "$1,199.24",
    "picture": "https://robohash.org/White",
    "name": "Wallace Williams",
    "gender": "male"
  },
  {
    "index": 3,
    "isActive": false,
    "balance": "$1,362.82",
    "picture": "https://robohash.org/Newton",
    "name": "Ellen Gibbs",
    "gender": "female"
  },
  {
    "index": 4,
    "isActive": true,
    "balance": "$2,496.05",
    "picture": "https://robohash.org/Sophia",
    "name": "Rosario Davis",
    "gender": "female"
  },
  {
    "index": 5,
    "isActive": false,
    "balance": "$1,228.36",
    "picture": "https://robohash.org/Anna",
    "name": "Flossie Boyer",
    "gender": "female"
  },
  {
    "index": 6,
    "isActive": true,
    "balance": "$1,979.98",
    "picture": "https://robohash.org/Madge",
    "name": "Bradford Bruce",
    "gender": "male"
  },
  {
    "index": 7,
    "isActive": true,
    "balance": "$1,280.43",
    "picture": "https://robohash.org/Paulette",
    "name": "Lori Briggs",
    "gender": "female"
  },
  {
    "index": 8,
    "isActive": true,
    "balance": "$2,151.43",
    "picture": "https://robohash.org/Wilder",
    "name": "Marsha Dotson",
    "gender": "female"
  },
  {
    "index": 9,
    "isActive": false,
    "balance": "$1,752.76",
    "picture": "https://robohash.org/Pate",
    "name": "Schultz Lowery",
    "gender": "male"
  },
  {
    "index": 10,
    "isActive": true,
    "balance": "$3,030.50",
    "picture": "https://robohash.org/Perez",
    "name": "Pruitt Grant",
    "gender": "male"
  },
  {
    "index": 11,
    "isActive": false,
    "balance": "$2,541.29",
    "picture": "https://robohash.org/Fox",
    "name": "Reynolds Hale",
    "gender": "male"
  },
  {
    "index": 12,
    "isActive": true,
    "balance": "$3,978.63",
    "picture": "https://robohash.org/Lucille",
    "name": "Ramona Stuart",
    "gender": "female"
  },
  {
    "index": 13,
    "isActive": false,
    "balance": "$3,851.80",
    "picture": "https://robohash.org/Roberson",
    "name": "Strickland Chan",
    "gender": "male"
  },
  {
    "index": 14,
    "isActive": true,
    "balance": "$3,695.88",
    "picture": "https://robohash.org/Black",
    "name": "Conway Ochoa",
    "gender": "male"
  }
  ];

  constructor(private toastCtrl: ToastController){
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
}
