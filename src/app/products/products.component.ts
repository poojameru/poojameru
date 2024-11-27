import { Component,AfterViewInit } from '@angular/core';
declare var $: any; // Declare jQuery globally

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})


export class ProductsComponent implements AfterViewInit {

  ngAfterViewInit() {
    // Initialize Owl Carousel
    $('.owl-carousel').owlCarousel({
      items: 4,
      loop: true,
      margin: 10,
      nav: true,
      dots: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      responsive: {
        0: { items: 1 },
        600: { items: 2 },
        900: { items: 3 },
        1200: { items: 4 }
      }
    });
  }
}
