import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dessert',
  templateUrl: './dessert.component.html',
  styleUrls: ['./dessert.component.sass']
})
export class DessertComponent implements OnInit{
  dessertItems: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('assets/desserts.json').subscribe((data) => {
      this.dessertItems = data;
    });
  }
}
