import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: 'home',component:HomeComponent
  },
  {
    path: 'about',component:AboutComponent
  },
  {
    path: 'resume',component:ResumeComponent
  },
  {
    path: 'Skill',component:PortfolioComponent
  },
  {
    path: 'services',component:ServicesComponent
  },
  {
    path: 'contact',component:ContactComponent
  },
  {
    path: 'home',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
