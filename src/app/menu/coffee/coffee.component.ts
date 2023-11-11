import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.sass']
})
export class CoffeeComponent implements OnInit{

  coffeeItems!: any[];

  constructor(private http: HttpClient) {
    this.http.get<any[]>('assets/coffee.json').subscribe(data => {
      this.coffeeItems = data;
    });
  }

  ngOnInit() {
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
