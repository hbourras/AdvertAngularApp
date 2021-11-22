import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { SellerListComponent } from './seller/seller-list/seller-list.component';
import { AdvertListComponent } from './advert/advert-list/advert-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SellerListComponent,
    AdvertListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
