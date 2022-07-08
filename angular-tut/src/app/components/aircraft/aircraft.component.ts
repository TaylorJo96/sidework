import { Component, OnInit, Input } from '@angular/core';
import { Plane } from '../../Plane'
import { TaskService } from 'src/app/services/task.service';
import { Task } from '../../Task';
import { TaskItemComponent } from '../task-item/task-item.component';


@Component({
  selector: 'app-aircraft',
  templateUrl: './aircraft.component.html',
  styleUrls: ['./aircraft.component.css']
})
export class AircraftComponent implements OnInit {
  title: 'get value'
  dayHours: number | string ;
  curHours:number | string ;

  displayVal:string = '';
  getValue(val: string) {
    console.warn(val)
    this.displayVal = val;
  }
  getHours(hours1: number | string, hours2: number| string)
{
  // this.curHours = hours2;
  // this.dayHours = hours1;
  this.tasks = this.taskService.getOrderedTasks(hours1,hours2)
  console.warn(hours1, hours2, this.tasks)
}
  @Input() aircraft: Plane;
  tasks: Task[] = [];
  orderedTasks: Task[] = [];


  constructor(private taskService: TaskService, ) { }

  ngOnInit(): void {
    // this.tasks = this.taskService.getOrderedTasks(this.dayHours, this.curHours);
  }
  // displayTasks(hours1, hours2) {
  //   this.tasks = this.taskService.getOrderedTasks(hours1, hours2);
  //   this.orderedTasks = this.taskService.getOrderedTasks(hours1,hours2);
  //   console.log(this.orderedTasks)

  // }
  private isButtonVisible = true;

}



