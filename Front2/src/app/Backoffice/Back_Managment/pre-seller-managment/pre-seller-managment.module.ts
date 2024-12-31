import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreSellerManagmentRoutingModule } from './pre-seller-managment-routing.module';
import { AddPreSellerComponent } from './add-pre-seller/add-pre-seller.component';
import { ListPreSellerComponent } from './list-pre-seller/list-pre-seller.component';
import { UpdatPreSellerComponent } from './updat-pre-seller/updat-pre-seller.component';


@NgModule({
  declarations: [
    AddPreSellerComponent,
    ListPreSellerComponent,
    UpdatPreSellerComponent
  ],
  imports: [
    CommonModule,
    PreSellerManagmentRoutingModule
  ]
})
export class PreSellerManagmentModule { }
