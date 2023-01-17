import React from 'react'
import { apiKey, apiURL, lat , long } from './config.js'
import * as $ from "jquery";

import './Weather.css'

import ClearDay from '../Assets/Svg/Weather/ClearDay.svg'
import ClearNight from '../Assets/Svg/Weather/ClearNight.svg'
import Clouds from '../Assets/Svg/Weather/Clouds.svg'
import Drizzle from '../Assets/Svg/Weather/Drizzle.svg'
import Rain from '../Assets/Svg/Weather/Rain.svg'
import Snow from '../Assets/Svg/Weather/Snow.svg'
import Thunderstorm from '../Assets/Svg/Weather/Thunderstorm.svg'



export default class Weather extends React.Component {

    constructor() {
        super();
        this.state = {
            
            currentTemperature: "",
            currentCondition: "",
            feelsLike: "",

            // Replace temperature w/ time OR do both?
            hour1Temperature: "",
            hour1Condition: "",
            hour2Temperature: "",
            hour2Condition: "",
            hour3Temperature: "",
            hour3Condition: "",
            hour4Temperature: "",
            hour4Condition: "",
            hour5Temperature: "",
            hour5Condition: "",
        }

        this.getCurrentWeather = this.getCurrentWeather.bind(this)
        this.getFutureWeather = this.getFutureWeather.bind(this)
        this.conditionToIcon = this.conditionToIcon.bind(this)
        this.tick = this.tick.bind(this)
    }  

    componentDidMount() {
        this.tick()
        this.interval = setInterval(() => this.tick(), 600000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    // Update the current temperature and condition
    getCurrentWeather() {
        $.ajax({
            url: apiURL+'weather?lat='+lat+'&lon='+long+'&appid='+apiKey+'&units=metric',
            type: "GET",
            success: data => {
              // Resolve current condition to URL of icon
              this.setState({
                  currentTemperature: Math.round(data.main.temp),
                  currentCondition: data.weather[0].main,
                  feelsLike: Math.round(data.main.feels_like),
              })
            }
          });
    }

    // Update the hourly temperature and condition
    getFutureWeather() {
        $.ajax({
            url: apiURL+'forecast?lat='+lat+'&lon='+long+'&appid='+apiKey+'&units=metric',
            type: "GET",
            success: data => {
              this.setState({
                hour1Temperature: '12pm | ' + Math.round(data.list[0].main.temp),
                hour1Condition: data.list[0].weather[0].main,
                // hour1Condition: 'Thunderstorm',
                hour2Temperature: '1pm | ' + Math.round(data.list[1].main.temp),
                hour2Condition: data.list[1].weather[0].main,
                // hour2Condition: 'Snow',
                hour3Temperature: '2pm | ' + Math.round(data.list[2].main.temp),
                hour3Condition: data.list[2].weather[0].main,
                // hour3Condition: 'Clear',
                hour4Temperature: '3pm | ' + Math.round(data.list[3].main.temp),
                // hour4Condition: 'Clouds',
                hour4Condition: data.list[3].weather[0].main,
                hour5Temperature: '4pm | ' + Math.round(data.list[4].main.temp),
                hour5Condition: data.list[4].weather[0].main,
                // hour5Condition: 'Drizzle',

              })
            }
          });
    }

    // Resolve the current weather condition to a URL of an icon
    conditionToIcon(condition) {
        if (condition === 'Thunderstorm') {
            return Thunderstorm
        }
        else if (condition === 'Drizzle') {
            return Drizzle

        }
        else if (condition === 'Rain') {
            return Rain
        }
        else if (condition === 'Snow') {
            return Snow
        }
        else if (condition === 'Clear') {
            // Check for day vs night
            return ClearNight
        }
        else if (condition === 'Clouds') {
            return Clouds
        }
        else {
            // Set as blank image / Unknown / Default as clear?
            return ClearDay
        }

    }

    tick() {
        this.getCurrentWeather()
        this.getFutureWeather()
    }



    render() {
        return(
            <div className='Weather'>
                <div className='BlurredBackground'>
                </div>
                <div className='MainContent'>
                    <div>
                        <div className='CurrentTemperature'>
                            {this.state.currentTemperature}°
                        </div>
                        <div className='CurrentLocation'>
                            <span>Toronto </span>| {this.state.feelsLike}°
                        </div>
                    </div>
                    <div className='CurrentWeatherIcon'>
                        <img src={this.conditionToIcon(this.state.currentCondition)} />
                    </div>
                </div>
                <div className='Hourly'>
                    <div>
                        <div>
                            {this.state.hour1Temperature}°
                        </div>
                        <div>
                            <img src={this.conditionToIcon(this.state.hour1Condition)} />
                        </div>
                    </div>
                    <div>
                        <div>
                            {this.state.hour2Temperature}°
                        </div>
                        <div>
                        <img src={this.conditionToIcon(this.state.hour2Condition)} />
                        </div>
                    </div>
                    <div>
                        <div>
                        {this.state.hour3Temperature}°
                        </div>
                        <div>
                        <img src={this.conditionToIcon(this.state.hour3Condition)} />
                        </div>
                    </div>
                    <div>
                        <div>
                        {this.state.hour4Temperature}°
                        </div>
                        <div>
                        <img src={this.conditionToIcon(this.state.hour4Condition)} />
                        </div>
                    </div>
                    <div>
                        <div>
                        {this.state.hour5Temperature}°
                        </div>
                        <div>
                        <img src={this.conditionToIcon(this.state.hour5Condition)} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}