import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import{AboutusComponent} from './components/aboutus/aboutus.component';
import{ContactusComponent} from './components/contactus/contactus.component';
import{AddnewsComponent} from './components/addnews/addnews.component';
import{AdminloginComponent} from './components/adminlogin/adminlogin.component';
import {AdminregisterComponent} from './components/adminregister/adminregister.component';
import {CarouselComponent} from './components/carousel/carousel.component';
import{ChatboxComponent} from './components/chatbox/chatbox.component';
import {EditdeletenewsComponent} from './components/editdeletenews/editdeletenews.component';
import {HeaderComponent} from './components/header/header.component';
import {NewsComponent} from './components/news/news.component';
import {SportsComponent} from './components/sports/sports.component';
import {WeatherComponent} from './components/weather/weather.component';
import {ErrorComponent}  from './components/error/error.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'header',
    component: HeaderComponent

  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutusComponent
  },
  {
    path: 'chatbox',
    component: ChatboxComponent,
  },
  {
    path: 'contact',
    component: ContactusComponent
  },
  {
    path: 'sports',
    component: SportsComponent
  },
  {
    path: 'register',
    component: AdminregisterComponent
  },
  {
    path: 'addNews',
    component: AddnewsComponent
  },
  {
    path: 'login',
    component: AdminloginComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'editNews/:id',
    component: EditdeletenewsComponent
  },

  {
    path: 'carousel',
    component: CarouselComponent

  },
  {
    path: 'weather',
    component: WeatherComponent
  },
  {
    path: '**',
    component: ErrorComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
