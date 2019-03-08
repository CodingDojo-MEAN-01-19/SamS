import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { GammaComponent } from './gamma/gamma.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { BrandComponent } from './product/brand/brand.component';
import { CategoryComponent } from './product/category/category.component';
import { ReviewComponent } from './review/review.component';
import { ReviewDetailComponent } from './review/review-detail/review-detail.component';
import { AuthorComponent } from './review/author/author.component';
import { AllReviewsComponent } from './review/all-reviews/all-reviews.component';
@NgModule({
  declarations: [
    AppComponent,
    // AlphaComponent,
    // BetaComponent,
    GammaComponent,
    ProductComponent,
    ProductDetailComponent,
    BrandComponent,
    CategoryComponent,
    ReviewComponent,
    ReviewDetailComponent,
    AuthorComponent,
    AllReviewsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
