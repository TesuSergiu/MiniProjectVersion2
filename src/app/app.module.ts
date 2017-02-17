import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { ProductListComponent } from './product/product-list.component';
import { StarRatingComponent } from './shared/star-rating.component';
import { HeaderComponent } from './shared/header.component';
import { HomepageComponent } from './shared/homepage.component';
import { FooterComponent } from './shared/footer.component';
import { ContactComponent } from './shared/contact.component';
import { ProductDetailsComponent } from './product/product-details.component';

import { DemoDataService } from './shared/demo-data.service';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path:'home', component:ProductListComponent},
      { path:'contact', component:ContactComponent},
      { path:'product/:id', component:ProductDetailsComponent},
      { path:'', redirectTo: 'home', pathMatch: 'full'},
      { path:'**', redirectTo: 'home', pathMatch: 'full'}
    ])
  ],
  declarations: [ AppComponent, ProductListComponent, StarRatingComponent, HeaderComponent, FooterComponent, ContactComponent, ProductDetailsComponent, HomepageComponent ],
  providers: [ DemoDataService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
