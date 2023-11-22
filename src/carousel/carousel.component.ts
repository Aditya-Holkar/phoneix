import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.sass']
})
export class CarouselComponent implements OnInit, OnDestroy {
  currentIndex = 0;
  intervalId: any;

  slides = [
    { image:'assets/third.JPG', title: 'Welcome to Phoenix Kaffee,', description: 'your premier destination for a productive yet pleasurable work-friendly atmosphere. Immerse yourself in our meticulously curated selection of modern and diverse coffee options, each cup designed to elevate your taste buds and enhance your overall coffee experience.' },
    { image: 'assets/first.JPG', title: 'At Phoenix Kaffee,', description: "our reputation extends beyond exceptional coffee; it's anchored in the creation of a welcoming ambiance conducive to productivity. Step into a space where creativity flows seamlessly, providing you with an ideal environment to focus, collaborate, and connect."},
    { image: 'assets/second.JPG', title: 'What truly distinguishes Phoenix Kaffee?', description: 'is our culturally inspired interior, meticulously designed to reflect the rich tapestry of Indian heritage. From vibrant colors to carefully selected decor, every element contributes to an immersive experience. Discover a blend of work-friendly vibes, diverse coffee offerings, and a soulful ambiance that not only sets Phoenix Kaffee apart but ensures your online search for the perfect cafe leads you to an unforgettable cultural and coffee journey in the heart of the city.' },
   
  ];

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  ngOnDestroy() {
    
    clearInterval(this.intervalId);
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }
}