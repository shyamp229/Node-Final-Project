import { SportsComponent } from './pages/sports/sports.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageContainerComponent } from './homepage/homepage-container/homepage-container.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { RegisterComponent } from './admin-components/auth/register/register.component';
import { UnauthorisedComponent } from './admin-components/unauthorised/unauthorised.component';
import { AddNewsComponent } from './admin-components/add-news/add-news.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './admin-components/auth/login/login.component';
import { NewsListComponent } from './admin-components/news-list/news-list.component';
import { EditNewsComponent } from './admin-components/edit-news/edit-news.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AdminHomePageComponent } from './admin-components/admin-home-page/admin-home-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomepageContainerComponent,
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
  },
  {
    path: 'sports',
    component: SportsComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'unauthorised',
    component: UnauthorisedComponent,
  },
  {
    path: 'addNews',
    component: AddNewsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'newsList',
    component: NewsListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'editNews/:id',
    component: EditNewsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'adminHome',
    component: AdminHomePageComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
