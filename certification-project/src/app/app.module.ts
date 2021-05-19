import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './layout/main-header/main-header.component';
import { MainFooterComponent } from './layout/main-footer/main-footer.component';
import { HomepageContainerComponent } from './homepage/homepage-container/homepage-container.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { WeatherListComponent } from './weather/list/weather-list.component';
import { WeatherItemComponent } from './weather/item/weather-item.component';
import { WeatherSearchComponent } from './weather/search/weather-search.component';
import { WeatherService } from './weather/weather.service';
import { TemperatureDirective } from './weather/temperature-directive';
import { QueryService } from './services/query.service';
import { SportsComponent } from './pages/sports/sports.component';
import { HeaderComponent } from './admin-components/layouts/header/header.component';
import { FooterComponent } from './admin-components/layouts/footer/footer.component';
import { LoginComponent } from './admin-components/auth/login/login.component';
import { RegisterComponent } from './admin-components/auth/register/register.component';
import { AddNewsComponent } from './admin-components/add-news/add-news.component';
import { NewsListComponent } from './admin-components/news-list/news-list.component';
import { EditNewsComponent } from './admin-components/edit-news/edit-news.component';
import { UnauthorisedComponent } from './admin-components/unauthorised/unauthorised.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AdminHomePageComponent } from './admin-components/admin-home-page/admin-home-page.component';
import { AdminNavBarComponent } from './admin-components/layouts/admin-nav-bar/admin-nav-bar.component';
import { ChatInboxComponent } from './homepage/chat-inbox/chat-inbox.component';
import { CarouselModule, WavesModule } from 'angular-bootstrap-md';
import { SportsService } from './services/sports.service';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainFooterComponent,
    HomepageContainerComponent,
    AboutUsComponent,
    ContactUsComponent,
    WeatherListComponent,
    WeatherItemComponent,
    WeatherSearchComponent,
    TemperatureDirective,
    SportsComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    AddNewsComponent,
    NewsListComponent,
    EditNewsComponent,
    UnauthorisedComponent,
    PageNotFoundComponent,
    AdminHomePageComponent,
    AdminNavBarComponent,
    ChatInboxComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule,
    CarouselModule,
    WavesModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger',
      cancelButtonType: 'secondary',
    }),
    AppRoutingModule,
  ],
  providers: [WeatherService, QueryService, SportsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
