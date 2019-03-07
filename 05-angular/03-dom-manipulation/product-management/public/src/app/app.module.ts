import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

// import { TaskComponent } from './cake/cake.component'; //

/*routing*/
import { ProductCreationComponent } from './product-creation/product-creation.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductHomeComponent } from './product-home/product-home.component';

// import { AlphaComponent } from './alpha/alpha.component';
// import { BetaComponent } from './beta/beta.component';
// import { GammaComponent } from './gamma/gamma.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductCreationComponent,
    ProductListComponent,
    ProductEditComponent,
    ProductHomeComponent,

    // AlphaComponent,
    // BetaComponent,
    // GammaComponent,
  ], // add CakeComponent?
  imports: [BrowserModule, HttpClientModule, FormsModule, AppRoutingModule],
  providers: [HttpService],
  bootstrap: [AppComponent],
})
export class AppModule {}
