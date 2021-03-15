import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  myCarouselOptions3:any;
  images = [
    "assets/img/Delhi.png",
    "assets/img/Bengaluru.png",
    "assets/img/Gurgaon.png",
    "assets/img/Hyderabad.png",
    "assets/img/Kolkata.png",
    "assets/img/Noida.png",
    "assets/img/Pune.png"

  ]

  constructor() { }

  ngOnInit(): void {
    this.myCarouselOptions3 = {
      loop: true,
      mouseDrag: true,
      pullDrag: true,
      items: 4,
    
      responsiveClass: true,
      itemsCustom : false,
        itemsDesktop : [1199,4],
        itemsDesktopSmall : [980,2],
        itemsTablet: [768,1],
        itemsTabletSmall: false,
        itemsMobile : [479,1],
        singleItem : true,
        margin : 25,

        autoHeight : true,
      responsive: {
       
        979: {
          items: 4,
          nav: false,
        },
        768: {
          items: 4,
          nav: false,
        },
        0: {
          items: 4,
          nav: false,
        },
      },
      dotsSpeed: false,
      nav: true,

      navText: [' ', ' '],
      autoplayTimeout: 700,
      autoplay: false,
      autoplayHoverPause: true,
    };
  }

}
