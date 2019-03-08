import { GammaComponent } from './gamma/gamma.component';
// import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { BrandComponent } from './product/brand/brand.component';
import { CategoryComponent } from './product/category/category.component';
import { ReviewComponent } from './review/review.component';
import { ReviewDetailComponent } from './review/review-detail/review-detail.component';
import { AuthorComponent } from './review/author/author.component';
import { AllReviewsComponent } from './review/all-reviews/all-reviews.component';
const routes: Routes = [
  // { path: 'alpha', component: AlphaComponent },
  // { path: 'beta', component: BetaComponent },
  // use a colon and parameter name to include a parameter in the url
  { path: 'gamma/:id', component: GammaComponent },
  // redirect to /alpha if there is nothing in the url
  { path: '', pathMatch: 'full', redirectTo: '/alpha' },
  // the ** will catch anything that did not match any of the above routes
  // { path: '**', component: PageNotFoundComponent },

  {
    path: 'product',
    component: ProductComponent,
    children: [
      { path: 'details/:id', component: ProductDetailComponent },
      { path: 'brand/:brand', component: BrandComponent },
      { path: 'category/:cat', component: CategoryComponent },
    ],
  },
  {
    path: 'review',
    component: ReviewComponent,
    children: [
      { path: 'details/:id', component: ReviewDetailComponent },
      { path: 'author/:id', component: AuthorComponent },
      { path: 'all/:id', component: AllReviewsComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
