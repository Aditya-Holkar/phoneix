import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sandwich',
  templateUrl: './sandwich.component.html',
  styleUrls: ['./sandwich.component.sass']
})
export class SandwichComponent implements OnInit{
  sandwichItems: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('assets/sandwiches.json').subscribe((data) => {
      this.sandwichItems = data;
    });
  }
}
