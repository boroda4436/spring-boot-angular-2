import { Component } from '@angular/core';
import { HomeController } from "../providers/home-controller";
import { TemperatureData } from "../models/TemperatureData";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  temperature = new TemperatureData();

  constructor(public homeController: HomeController){}
  title = 'app works!';

  loadTemperature() {
    this.homeController.loadTemperature().subscribe(temp =>{
      console.log("Temperature is: ", temp);
      this.temperature = temp;
    }, err => {console.log("Error while get temperature: ", err)});
  };
}


