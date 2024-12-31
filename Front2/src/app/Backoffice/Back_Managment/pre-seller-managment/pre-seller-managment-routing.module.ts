import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPreSellerComponent } from './list-pre-seller/list-pre-seller.component';

const routes: Routes = [
  { path: 'list', component: ListPreSellerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreSellerManagmentRoutingModule { }
