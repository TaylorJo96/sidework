import { Task } from "./Task"
import { AircraftComponent } from "./components/aircraft/aircraft.component"
import { NgIfContext } from "@angular/common"
export const TASKS: Task[]
=[{
    itemNumber: 1,
    description:"Item 1",
   logDate: new Date ('April 07, 2018 '),
   logHours: null,
   intervalMonths:null,
   intervalHours: null,
   nextDueDate: null,
   formattedNextDueDate: null,
   formattedLogDate: null
   

   },
  {
    itemNumber: 2,
    description:"Item 2",
   logDate: new Date('April 07, 2018'),
   logHours: 100,
   intervalMonths:12,
   intervalHours: 500,
   nextDueDate: null,
   formattedNextDueDate: null,
   formattedLogDate: null
  },
  {
    itemNumber: 3,
    description:"Item 3",
   logDate: new Date('June 01, 2018 '),
   logHours: 150,
   intervalMonths:null,
   intervalHours: 400,
   nextDueDate: null,
   formattedNextDueDate: null,
   formattedLogDate: null
  },
  {
    itemNumber: 4,
    description:"Item 4",
    logDate:new  Date('June 01, 2018 '),
   logHours: 150,
   intervalMonths:6,
   intervalHours: null,
   nextDueDate: null,
   formattedNextDueDate: null,
   formattedLogDate: null

  },

  ]