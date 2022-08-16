import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [{
  path: 'home', component: HomeComponent
},{ path: 'aboutUs', component: AboutUsComponent },
{ path: 'index', component: IndexComponent},
{ path: 'products', component: ProductsComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
