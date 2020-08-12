import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client/client.component';
import { ClientsComponent } from './clients/clients.component';
import { ContractorsComponent } from './contractors/contractors.component';



@NgModule({
  declarations: [ClientComponent, ClientsComponent, ContractorsComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
