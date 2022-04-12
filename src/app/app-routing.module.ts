import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { CreateComponent } from './forms/create/create.component';
import { UpdateComponent } from './forms/update/update.component';
import { ListComponent }   from './forms/list/list.component';

const routes: Routes = [
  { path: 'EmpesaList', component: ListComponent },
  { path: 'EmpesaList/create', component: CreateComponent },
  { path: 'EmpesaList/update/:id', component: UpdateComponent },
  //{ path: 'login', component: LoginComponent },
  //{ path: 'register', component: RegisterComponent },
  //{ path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
