import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit, OnDestroy {
  currentIndex = 0;
  intervalId: any;

  slides = [
    { image:'assets/third.JPG', title: 'Welcome to Phoenix Kaffee,', description: '"Phoenix Kaffee: Elevate your workday with diverse coffee options and a welcoming ambiance in our culturally inspired interior."' },
    { image: 'assets/first.JPG', title: 'At Phoenix Kaffee,', description: '"Experience productivity and pleasure at Phoenix Kaffee, where a range of coffee delights and an inviting ambiance converge seamlessly."'},
    { image: 'assets/second.JPG', title: 'What truly distinguishes Phoenix Kaffee?', description: '"Discover Phoenix Kaffee – where a diverse coffee selection, work-friendly ambiance, and culturally inspired interior create a unique blend of productivity and pleasure."' },
  ];

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 7000);
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
