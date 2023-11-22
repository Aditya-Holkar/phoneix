import { Component, AfterViewInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements AfterViewInit {
  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.setupFooterClickEvent();
  }

  private setupFooterClickEvent() {
    const footerLinks = document.querySelectorAll('.footer-links-holder h3');
  
    footerLinks.forEach(link => {
      this.renderer.listen(link, 'click', () => {
        const parentElement = link.parentElement;
  
        if (parentElement) {
          parentElement.classList.toggle('active');
        }
      });
    });
  }
}
