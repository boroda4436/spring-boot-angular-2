/**
 * Created by Bohdan on 17.04.2017
 */
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs";
import { TemperatureData } from "../models/TemperatureData";
import 'rxjs/add/operator/map';

@Injectable()
export class HomeController{
  serverUrl = "http://localhost:8080";

  constructor(public http:Http){ }

  loadTemperature(): Observable<TemperatureData> {
    return this.http.get(`${this.serverUrl}/temperature`).map(res => <TemperatureData>(res.json()))
  }
}
