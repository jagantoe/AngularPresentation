import { Routes } from "@angular/router";
import { ProductDetailComponent, ProductListComponent } from "../routing-components";

var routes: Routes = [
  {
    path: 'products',
    component: ProductListComponent
  },
  {
    path: 'product/:id',
    component: ProductDetailComponent
  }
];
