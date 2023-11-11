import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snacks',
  templateUrl: './snacks.component.html',
  styleUrls: ['./snacks.component.sass']
})
export class SnacksComponent implements OnInit{

  snackItems: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('assets/snacks.json').subscribe((data) => {
      this.snackItems = data;
    });
  }
}
