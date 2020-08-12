import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ContractorsComponent } from './contractors/contractors.component';
import { ClientsComponent } from './clients/clients.component'; 
import { AppRoutingModule } from './../app-routing.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [HomeComponent, ContractorsComponent, ClientsComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    NzLayoutModule, 
    NzTableModule,
    NzBreadCrumbModule,
    NzMenuModule,
    NzIconModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
