import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { WeatherComponent } from './components/weather/weather.component';
import { SportsComponent } from './components/sports/sports.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ChatboxComponent } from './components/chatbox/chatbox.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { AdminregisterComponent } from './components/adminregister/adminregister.component';
import { AddnewsComponent } from './components/addnews/addnews.component';
import { EditdeletenewsComponent } from './components/editdeletenews/editdeletenews.component';
import { NewsComponent } from './components/news/news.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    WeatherComponent,
    SportsComponent,
    CarouselComponent,
    ContactusComponent,
    AboutusComponent,
    ChatboxComponent,
    AdminloginComponent,
    AdminregisterComponent,
    AddnewsComponent,
    EditdeletenewsComponent,
    NewsComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
