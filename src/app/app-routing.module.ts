import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';


//http://localhost:4200
const routes: Routes = [                                    // ->  path    page       
  { path: "", component: HomeComponent},                    // ->  /        home page  //http://localhost:4200/
  { path: "login", component: LoginComponent},              // ->  /login        login page //http://localhost:4200/login
  {path: "register", component: RegisterComponent},         // ->  /register       register page //http://localhost:4200/register
  //define ruta de modulos usando lazyLoad (carga perezosa)
  {
    path: "dashboard",
    loadChildren: () => import("./protected/protected.module")
                   .then((module) => module.ProtectedModule)
  },
  { path: "**", redirectTo: ""}                             // ->  /hola        home page //http://localhost:4200/login

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }