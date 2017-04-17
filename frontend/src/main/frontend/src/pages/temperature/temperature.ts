/**
 * Created by Bohdan on 17.04.2017
 */
import { Component } from '@angular/core';
import { TemperatureData } from "../../models/TemperatureData";
import { HomeController } from "../../providers/home-controller";

@Component({
  selector: 'page-temperature',
  templateUrl: 'temperature.html'
})
export class TemperaturePage {
  temperature = new TemperatureData();

  constructor(public homeController: HomeController) {

    homeController.loadTemperature().subscribe(temp =>{
      console.log("Temperature is: ", temp);
      this.temperature = temp;
    }, err => {console.log("Error while get temperature: ", err)});
  };

}
