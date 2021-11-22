import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvertListComponent } from './advert/advert-list/advert-list.component';
import { SellerListComponent } from './seller/seller-list/seller-list.component';

const routes: Routes = [
  {path: 'adverts', component: AdvertListComponent},
  {path: '', redirectTo:'adverts', pathMatch: 'full'},
  {path: 'sellers', component: SellerListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
