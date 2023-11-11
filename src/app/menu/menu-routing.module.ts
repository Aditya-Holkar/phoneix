import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoffeeComponent } from './coffee/coffee.component';
import { DessertComponent } from './dessert/dessert.component';
import { MenuComponent } from './menu/menu.component';
import { MojitoComponent } from './mojito/mojito.component';
import { SandwichComponent } from './sandwich/sandwich.component';
import { SnacksComponent } from './snacks/snacks.component';

const routes: Routes = [

{
  path:'', component:MenuComponent,children:[
    {
      path:"coffee", component: CoffeeComponent
    },
    {
      path:"dessert", component: DessertComponent
    },
    {
      path:"mojito", component: MojitoComponent
    },
    {
      path:"sandwich", component: SandwichComponent
    },
    {
      path:"snacks", component: SnacksComponent
    }
  ]
}

  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
