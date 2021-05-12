import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  name: String = "KnowledgeHut";
  favoriteColor: String = "secondary";

  constructor() {
    console.log("Hello from HomePage");
    // this.name = "Samarth Agarwal";
  }

  getName(num: number): String {
    if(num % 2 == 0) {
      return "KnowledgeHut";
    } else {
      return "Samarth";
    }
  }

  changeColor(): void {
    if(this.favoriteColor == "danger") {
      this.favoriteColor = "primary";
    } else {
      this.favoriteColor = "danger"
    }
  }



}
