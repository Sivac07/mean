import { Component } from '@angular/core';
import { RouterOutlet, RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { ItemsComponent } from './items/items.component';
import { ProductPerformanceComponent } from './product-performance/product-performance.component';

// Define your routes
const routes: Routes = [
  { path: '', redirectTo: '/items', pathMatch: 'full' },
  { path: 'items', component: ItemsComponent },
  { path: 'product', component: ProductPerformanceComponent }
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,  // Import RouterModule here
    CommonModule,
    HomeComponent,
    AboutComponent,
    RegisterComponent
    ,ItemsComponent,
    ProductPerformanceComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-routing';
}

// Manually configure the router in the application bootstrap code
RouterModule.forRoot(routes);