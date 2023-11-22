import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MenuRoutingModule } from './menu-routing.module';
import { CoffeeComponent } from './coffee/coffee.component';
import { DessertComponent } from './dessert/dessert.component';
import { MojitoComponent } from './mojito/mojito.component';
import { SandwichComponent } from './sandwich/sandwich.component';
import { SnacksComponent } from './snacks/snacks.component';
import { MenuComponent } from './menu/menu.component';
import { ColdCoffeeComponent } from './cold-coffee/cold-coffee.component';





@NgModule({
  declarations: [
    CoffeeComponent,
        DessertComponent,
        MojitoComponent,
        SandwichComponent,
        SnacksComponent,
        MenuComponent,
        ColdCoffeeComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class MenuModule { }
