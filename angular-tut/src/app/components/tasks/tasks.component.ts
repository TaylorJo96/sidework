import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../services/task.service'
// import {TASKS} from '../../mock-tasks';
import { Task } from '../../Task';
import { AircraftComponent } from '../aircraft/aircraft.component';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
tasks: Task[] = [];
orderedTasks: Task[] = [];
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
   
  }

}
