import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { CreateClientComponent } from './components/create-client/create-client.component';

const routes: Routes = [
  { path : 'home' , component : DashboardComponent },
  { path : 'createclient', component : CreateClientComponent },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) }
];

@NgModule({
  // declarations: [
  //   DashboardComponent,
  //   CreateClientComponent
  // ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
