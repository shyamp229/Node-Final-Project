import { Injectable } from "@angular/core";
import { Http } from "@angular/http";


import { Observable } from "rxjs";

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';


import {WeatherItem} from "./item/weather-item";
import {WEATHER_ITEMS} from "./mock-weather";


@Injectable()
export class WeatherService {


    constructor(private _http: Http) {}


    getWeatherItems() {
        return WEATHER_ITEMS;
    }
    
    addWeatherItem(item: WeatherItem) {
        WEATHER_ITEMS.push(item);
    }
    
    clearWeatherItems() {
        WEATHER_ITEMS.splice(0);
    }


    deleteWeatherItem(item: WeatherItem): Observable<any> {
        WEATHER_ITEMS.splice(WEATHER_ITEMS.indexOf(item), 1);
        return null;
    }


    isExistWeatherItem(item: WeatherItem): any {
        return WEATHER_ITEMS.some(elem => (elem.city == item.city && elem.countryCode == item.countryCode));
    }


    searchWeatherInfo(city: string): Observable<any> {
        const APPID = '7a211c68435846ab04153a9d815b09f3';
     
        //get lattitude and longitude 
        //store in variables
        //const lat = position.coords.latitude;
        //const lon = position.coords.longitude;
        //api key
        ////maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=YOUR_API_KEY
        //maps.googleapis.com/maps/api/geocode/json?latlng='+lat+ ','+lon+'&key=YOUR_API_KEY


        //takes city, returns weather according to city
        let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=' + APPID + '&units=imperial';
        return this._http.get(url)
            .map(
                //maps to JSON before return
                response => response.json()
            )
            .catch(
                error => {
                    //returns error
                    return Observable.of<any>(error.json());
                }
            );
    }

    
    getWeatherLocation(){
        //pulls location if possible
        if (navigator.geolocation) {
            //if location can be pulled
            navigator.geolocation.getCurrentPosition((position)=>{
                //get lattitude and longitude store in variable
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                //api key
                const aKey = '00da176b1d8e1a229671c3cbb58a7225';
                //exclude, makes it easier to control output
                const exclude = 'minutely,hourly,alerts';//can add more exclusions via excl1,excl2,excl3 no spaces.
                //test call
                //https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=minutely,hourly,daily,alerts&appid=00da176b1d8e1a229671c3cbb58a7225
                //actual call using variables
                let url = 'https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+ lon +'&exclude='+exclude+'&appid='+aKey
                console.log(this._http.get(url).subscribe())
               //let jData[this._http.get(url)];
                return this._http.get(url)
            });
        } else {
           console.log("No support for geolocation")
        }
      }

    }

/**  getLocation(): void{
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position)=>{
          const longitude = position.coords.longitude;
          const latitude = position.coords.latitude;
          this.callApi(longitude, latitude);
        });
    } else {
       console.log("No support for geolocation")
    }
  }

  callApi(Longitude: number, Latitude: number){
    const url = `https://api-adresse.data.gouv.fr/reverse/?lon=${Longitude}&lat=${Latitude}`
    //Call API
  } */