import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit {

  constructor() { }

  ngOnInit() {
    const typedElement = document.querySelector('.typed');

    if (typedElement) {
      const typedStringsAttribute = typedElement.getAttribute('data-typed-items');
      const typedStringsArray = typedStringsAttribute ? typedStringsAttribute.split(',') : [];

      new Typed('.typed', {
        strings: typedStringsArray,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
      });
    }
  }
  }


