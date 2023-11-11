import { HttpClient } from '@angular/common/http';
import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent {
  coffeeItems!: any[];
  dessertItems: any[] = [];
  mojitoItems: any[] = [];
  sandwichItems: any[] = [];
  snackItems: any[] = [];


  constructor(private el: ElementRef ,private http: HttpClient) {
    this.http.get<any[]>('assets/coffee.json').subscribe(data => {
      this.coffeeItems = data;
    });
    this.http.get<any[]>('assets/desserts.json').subscribe((data) => {
      this.dessertItems = data;
    });
    this.http.get<any[]>('assets/mojitos.json').subscribe((data) => {
      this.mojitoItems = data;
    });
    this.http.get<any[]>('assets/sandwiches.json').subscribe((data) => {
      this.sandwichItems = data;
    });
    this.http.get<any[]>('assets/snacks.json').subscribe((data) => {
      this.snackItems = data;
    });

  }



  ngOnInit() {
    this.el.nativeElement.querySelectorAll('.accordian header').forEach((header: HTMLElement) => {
      header.addEventListener('click', () => {
        const section = header.nextElementSibling as HTMLElement;
        
        if (section.style.display === 'block') {
          section.style.display = 'none';
        } else {
          section.style.display = 'block';
        }
      });
    });

    const accordianHeaders = document.querySelectorAll('.accordian h3');

    accordianHeaders.forEach(header => {
      header.addEventListener('click', (e) => {
        const icon = header.querySelector('.fa.fa-plus');

        if (icon) {
          icon.classList.toggle('open');
        }

        const ul = header.nextElementSibling as HTMLElement; // Cast to HTMLElement
        if (ul && ul.tagName === 'UL') {
          if (ul.style.display === 'none' || ul.style.display === '') {
            ul.style.display = 'block';
          } else {
            ul.style.display = 'none';
          }
        }
      });
    });
  }
}
