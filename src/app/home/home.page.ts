import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user={
    name:'Adil',
    city:'Gujrat',
    interests:['Detective Novels','Web Designing','Multiplayer Games']
  };

  constructor() {}

}
