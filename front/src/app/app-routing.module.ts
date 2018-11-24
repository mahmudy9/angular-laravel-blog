import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { ArticlesComponent } from './articles/articles.component';
import { NotComponent } from './not/not.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileGuard } from './profile.guard';
import { LoginGuard } from './login.guard';

const routes : Routes = [
  { path: '' , component: HomeComponent},
  { path:'login' ,
   component: LoginComponent,
  canActivate:[LoginGuard] },
  { path:'signup' ,
   component: SignupComponent,
  canActivate:[LoginGuard] },
  { path:'profile' ,
   component: ProfileComponent,
  canActivate: [ProfileGuard] },
  { path: 'articles', component: ArticlesComponent },
  { path: 'dashboard' ,
   component: DashboardComponent,
  canActivate:[ProfileGuard] },
  { path: '**', component: NotComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
