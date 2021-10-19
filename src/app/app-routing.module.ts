import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShortUrlScreenComponent } from './short-url-screen/short-url-screen.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent
},{
  path: "login",
  component: LoginComponent
},{
  path: "register",
  component: RegisterComponent
},{
  path: "shortner",
  component: ShortUrlScreenComponent
},{
  path: "dashboard",
  component: DashboardComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
