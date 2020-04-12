import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  products = [
    {name: 'Bamboo fiber gobo', price: 456, discount: 132, img: '../../assets/img/lamp.jpg'},
    {name: 'Bamboo fiber gobo', price: 456, discount: 132, img: '../../assets/img/lamp.jpg'},
    {name: 'Bamboo fiber gobo', price: 456, discount: 132, img: '../../assets/img/lamp.jpg'},
    {name: 'Bamboo fiber gobo', price: 456, discount: 132, img: '../../assets/img/lamp.jpg'},
    {name: 'Bamboo fiber gobo', price: 456, discount: 132, img: '../../assets/img/lamp.jpg'},
    {name: 'Bamboo fiber gobo', price: 456, discount: 132, img: '../../assets/img/lamp.jpg'},
    {name: 'Bamboo fiber gobo', price: 456, discount: 132, img: '../../assets/img/lamp.jpg'},
    {name: 'Bamboo fiber gobo', price: 456, discount: 132, img: '../../assets/img/lamp.jpg'}
  ];

  reviews = [
    {img: '../../assets/img/user.jpg', name: 'John Doe', date: 'August 28, 2018', title: 'Excellent', description: 'Lorem ipsum ksdjf sofi sodfk skdjajsd aijd sfjloj ij Lorem ipsum ksdjf sofi sodfk skdjajsd aijd sfjloj ij Lorem ipsum ksdjf sofi sodfk skdjajsd aijd sfjloj ij'},
    {img: '../../assets/img/user.jpg', name: 'John Doe', date: 'August 28, 2018', title: 'Excellent', description: 'Lorem ipsum ksdjf sofi sodfk skdjajsd aijd sfjloj ij Lorem ipsum ksdjf sofi sodfk skdjajsd aijd sfjloj ij Lorem ipsum ksdjf sofi sodfk skdjajsd aijd sfjloj ij'},
    {img: '../../assets/img/user.jpg', name: 'John Doe', date: 'August 28, 2018', title: 'Excellent', description: 'Lorem ipsum ksdjf sofi sodfk skdjajsd aijd sfjloj ij Lorem ipsum ksdjf sofi sodfk skdjajsd aijd sfjloj ij Lorem ipsum ksdjf sofi sodfk skdjajsd aijd sfjloj ij'},
    {img: '../../assets/img/user.jpg', name: 'John Doe', date: 'August 28, 2018', title: 'Excellent', description: 'Lorem ipsum ksdjf sofi sodfk skdjajsd aijd sfjloj ij Lorem ipsum ksdjf sofi sodfk skdjajsd aijd sfjloj ij Lorem ipsum ksdjf sofi sodfk skdjajsd aijd sfjloj ij'}
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
