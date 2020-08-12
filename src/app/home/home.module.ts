import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './clients/clients.component';
import { HomeComponent } from './home.component';
import { ContractorsComponent } from './contractors/contractors.component';
import { AppRoutingModule } from './../app-routing.module';


@NgModule({
  declarations: [HomeComponent, ClientsComponent, ContractorsComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
