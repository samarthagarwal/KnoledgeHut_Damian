import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

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

  selectedCustomer: any;

  setCustomer(customer) {
    this.selectedCustomer = customer;
  }

  getCustomer() {
    return this.selectedCustomer;
  }

  constructor() { }

  getCustomerByIndex(idx: number) {
    for (let index = 0; index < this.customers.length; index++) {
      if(this.customers[index].index == idx) {
        return this.customers[index];
      }
    }
  }
}
