import { createMayBeForwardRefExpression } from '@angular/compiler';
import { Component, NgModule, OnInit } from '@angular/core';


@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.css']
})
export class PlanesComponent {
  title: string = "planesComponent"
  data: aircraft[] = [firstAircraft, secondAircraft]
}


class aircraft  { 
  //field 
  aircraftId: number;
  dailyHours: number;
  currentHours: number;
 constructor(aircraftId: number, dailyHours: number, currentHours: number){
   this.aircraftId = aircraftId;
   this.dailyHours = dailyHours;
   this.currentHours = currentHours;
 }
}

  let firstAircraft = new aircraft(1,.07,550);
let secondAircraft = new aircraft(2,1.1,200);


// let PLANES: aircraft[] = [
// firstAircraft,secondAircraft
// ];



  







 
