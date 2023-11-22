import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { CoffeeComponent } from './menu/coffee/coffee.component';
import { DessertComponent } from './menu/dessert/dessert.component';
import { MenuComponent } from './menu/menu/menu.component';
import { MojitoComponent } from './menu/mojito/mojito.component';
import { SandwichComponent } from './menu/sandwich/sandwich.component';
import { SnacksComponent } from './menu/snacks/snacks.component';

const routes: Routes = [
  
  {
    path:"", component:HomeComponent
  },
  {
    path:"about", component:AboutComponent
  },
  // {
  //   path: 'menu',
  //   loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule)
  // },
  {
    path:'menu', component:MenuComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
