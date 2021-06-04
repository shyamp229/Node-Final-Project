import { Component, ViewEncapsulation } from '@angular/core';
import { WeatherListComponent } from './weather/list/weather-list.component';
import { WeatherItemComponent } from './weather/item/weather-item.component';
import { WeatherSearchComponent } from './weather/search/weather-search.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class AppComponent {
  title = 'certification-project';
}
