import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {
  active = 1;
  heading = 'Details';
  constructor() { }

  ngOnInit(): void {
  }

  activeNav(index, text){
    this.active = index;
    this.heading = text;
  }

}
