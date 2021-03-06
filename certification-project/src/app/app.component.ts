import { Component } from '@angular/core';
import { WeatherListComponent } from './weather/list/weather-list.component';
import { WeatherItemComponent } from './weather/item/weather-item.component';
import { WeatherSearchComponent } from './weather/search/weather-search.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'certification-project';
}
