import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ClientsComponent } from './home/clients/clients.component';
import { ContractorsComponent } from './home/contractors/contractors.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    
    children: [
      {
        path: 'contractors',
        component: ContractorsComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'clients',
        component: ClientsComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'login',
        component: AuthComponent,
      },
    ],
  },
    { 
      path: '**', 
      redirectTo: 'home', 
      pathMatch: 'full' 
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
