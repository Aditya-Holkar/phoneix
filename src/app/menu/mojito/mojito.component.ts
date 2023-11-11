import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mojito',
  templateUrl: './mojito.component.html',
  styleUrls: ['./mojito.component.sass']
})
export class MojitoComponent implements OnInit{
  mojitoItems: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('assets/mojitos.json').subscribe((data) => {
      this.mojitoItems = data;
    });
  }
}
