import { Component, OnInit } from '@angular/core';
import {PLANES} from '../../mock-aircrafts'
import { PlaneService } from 'src/app/services/plane.service';
// import { PLANES } from 'src/app/mock-aircrafts';
import { Plane } from '../../Plane';
@Component({
  selector: 'app-all-aircrafts',
  templateUrl: './all-aircrafts.component.html',
  styleUrls: ['./all-aircrafts.component.css']
})
export class AllAircraftsComponent implements OnInit {
planes: Plane[] = PLANES;
  constructor(private planeService: PlaneService) { }

  ngOnInit(): void {
    this.planes = this.planeService.getPlanes();
  }

}
