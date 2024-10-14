import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ItemsComponent } from './items/items.component';
import { ProductPerformanceComponent } from './product-performance/product-performance.component';

export const routes: Routes = [
  { path: '', redirectTo: '/items', pathMatch: 'full' },
  { path: 'items', component: ItemsComponent },
  { path: 'product', component: ProductPerformanceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
