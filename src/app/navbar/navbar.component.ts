import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit{

  navToggler!: HTMLElement;
  navMenu!: HTMLElement;
  navLinks!: NodeListOf<HTMLElement>;

  ngOnInit(): void {
    this.navToggler = document.querySelector('.nav-toggler') as HTMLElement;
    this.navMenu = document.querySelector('.site-navbar ul') as HTMLElement;
    this.navLinks = document.querySelectorAll('.site-navbar a') as NodeListOf<HTMLElement>;

    this.allEventListeners();
  }

  allEventListeners() {
 
    this.navToggler.addEventListener('click', () => this.togglerClick());

    this.navLinks.forEach((elem) =>
      elem.addEventListener('click', () => this.navLinkClick())
    );
  }

  togglerClick() {
    this.navToggler.classList.toggle('toggler-open');
    this.navMenu.classList.toggle('open');
  }

  navLinkClick() {
    if (this.navMenu.classList.contains('open')) {
      this.navToggler.click();
    }
  }
}
