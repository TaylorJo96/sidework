import { Component } from '@angular/core';
import { TaskItems } from './task-items';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
},

)
export class AppComponent {
  title = 'aircraft';
 
  taskItemList: TaskItems[] = [
    {
      itemNumber: 1,
      description:"Item 1",
     logDate: new Date('April 07, 2018 00:00:00'),
     
    //  figure out how to allow null or I am going to do a if 0 statement to work around--
     logHours: null,
     intervalMonths:null,
     intervalHours: null,

     },
    {
      itemNumber: 2,
      description:"Item 2",
     logDate: new Date('April 07, 2018 00:00:00'),
     logHours: 100,
     intervalMonths:12,
     intervalHours: 500,

    },
    {
      itemNumber: 3,
      description:"Item 3",
     logDate: new Date('June 01, 2018 00:00:00'),
     logHours: 150,
     intervalMonths:0,
     intervalHours: 400,
    },{
      itemNumber: 4,
      description:"Item 4",
     logDate: new Date('June 01, 2018 00:00:00'),
     logHours: 150,
     intervalMonths:6,
     intervalHours: 0,
    },
  
    ]

  
}
