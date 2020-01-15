import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDataComponent } from './product-data/product-data.component';

const routes: Routes = [
  { path: 'products', component: ProductDataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }