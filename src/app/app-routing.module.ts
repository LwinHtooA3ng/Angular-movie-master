import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';

const routes: Routes = [
  // {path: "", redirectTo: "splash-screen", pathMatch: "full"},
  // {path: "splash-screen", component: SplashScreenComponent},
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "login", component: LoginComponent, canActivate: [AuthGuard]},
  {path: "logout", component: LogoutComponent},
  {path: "movie-details/:movieId", component: MovieDetailsComponent},
  {path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
