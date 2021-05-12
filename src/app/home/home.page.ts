import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  showImage: boolean = false;

  people: any[] = [];

  

  constructor(){
    this.people.push({
      "id": 1,
      "name": "Samarth",
      "profile_image": "1232",
      "post": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, porro! Excepturi suscipit cumque ut voluptatem!",
      "show_content": true
    });
    this.people.push({
      "id": 2,
      "name": "Damian",
      "profile_image": "1132",
      "post": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, porro! Excepturi suscipit cumque ut voluptatem!",
      "show_content": true
    });
    this.people.push({
      "id": 3,
      "name": "KnowledgeHut",
      "profile_image": "1233",
      "post": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, porro! Excepturi suscipit cumque ut voluptatem!",
      "show_content": true
    });
    this.people.push({
      "id": 4,
      "name": "John",
      "profile_image": "132",
      "post": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, porro! Excepturi suscipit cumque ut voluptatem!",
      "show_content": true
    });
  }

  toggleText(id: number) {
    for (let index = 0; index < this.people.length; index++) {
      if(this.people[index].id == id) {
        
        this.people[index].show_content = !this.people[index].show_content;
        break;
      }
    }
  }

}
