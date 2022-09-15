import { CadastroComponent } from './home/cadastro/cadastro.component';
import { AuthGuard } from './guard/auth-guard';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { 
    path: 'login', 
    component: LoginComponent 
  },
  { 
    path: '', 
    component: HomeComponent,
    canActivate : [AuthGuard] 
  },
  { 
    path: 'cadastro', 
    component: CadastroComponent,
    canActivate : [AuthGuard] 
  }
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
