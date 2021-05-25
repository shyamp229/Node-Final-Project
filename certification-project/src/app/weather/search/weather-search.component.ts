import { Component, OnInit } from "@angular/core";
import {NgForm} from '@angular/forms';


import { Observable } from "rxjs";
import { Subject } from "rxjs";


import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';


import { WeatherService } from "../weather.service";
import { WeatherItem } from "../item/weather-item";


@Component({
    selector: 'weather-search',
    templateUrl: './weather-search.component.html',
    styleUrls: ['./weather-search.component.css']
})
//weather searching function
export class WeatherSearchComponent implements OnInit {
    private searchStream = new Subject<string>();
    //recieves json
    data:any = {};
    //initialize booleans to false
    isCityFound:boolean = false;
    isSearching:boolean = false;

    //TO TRACE FLOW OF PROGRAM, START WITH INIT

    constructor(private _weatherService:WeatherService) {}


    onSearchLocation(value:string): void {
        console.log(value);
        this.isSearching = true;
        this.searchStream.next(value);
    }


    //when enter is pressed
    onSubmit(f: NgForm) {
        let cityName: string = this.data.name;
        let cityDescription: string = this.data.weather ? this.data.weather[0].main : '';
        let cityTemperature: number = this.data.main ? 1*this.data.main.temp_min : null;
        let countryCode = this.data.sys ? this.data.sys.country : '';


        const newItem = new WeatherItem(cityName, cityDescription, cityTemperature, countryCode);


        
        if (cityName && !this._weatherService.isExistWeatherItem(newItem)) {
            this._weatherService.addWeatherItem(newItem);
            f.resetForm();
        }
    }


    ngOnInit():any {
        //constant listening for search
        this.searchStream
            .debounceTime(500)
            .distinctUntilChanged()
            //takes in the string for city name
            .switchMap((term:string) => this._weatherService.searchWeatherInfo(term))
            .subscribe( //looks for match to city name
                data => {
                    if (data.name) {
                        this.isCityFound = true;
                    }
                    else {
                        this.isCityFound = false;
                    }
                    this.isSearching = false;
                    return this.data = data;
                    //displays city name above search box
                },
                error => console.warn(error)
        );
    }
}