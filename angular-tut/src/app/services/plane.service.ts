import { Injectable } from '@angular/core';
import { Plane } from '../Plane';
import { PLANES } from '../mock-aircrafts';
@Injectable({
  providedIn: 'root'
})
export class PlaneService {

  constructor() { }
  getPlanes(): Plane[]{
    return PLANES;
  }
}
