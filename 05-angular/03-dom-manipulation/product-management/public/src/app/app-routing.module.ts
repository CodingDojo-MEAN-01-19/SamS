// import { AlphaComponent } from './alpha/alpha.component';
// import { BetaComponent } from './beta/beta.component';
// import { GammaComponent } from './gamma/gamma.component';
import { ProductCreationComponent } from './product-creation/product-creation.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductHomeComponent } from './product-home/product-home.component';
// import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: 'product-home', component: ProductHomeComponent },
  { path: 'product-creation', component: ProductCreationComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'product-edit/:product_id', component: ProductEditComponent },

  // using :product_id to be specific, could just use :id
  // // redirect to /alpha if there is nothing in the url
  { path: '', pathMatch: 'full', redirectTo: '/product-home' },
  // the ** will catch anything that did not match any of the above routes
  { path: '**', component: ProductHomeComponent },

  // { path: 'alpha', component: AlphaComponent },
  // { path: 'beta', component: BetaComponent },
  // // use a colon and parameter name to include a parameter in the url
  // { path: 'gamma/:id', component: GammaComponent },
  // // redirect to /alpha if there is nothing in the url
  // { path: '', pathMatch: 'full', redirectTo: '/alpha' },
  // the ** will catch anything that did not match any of the above routes
  // { path: '**', component: PageNotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
