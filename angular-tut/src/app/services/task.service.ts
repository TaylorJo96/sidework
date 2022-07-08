import { Injectable } from '@angular/core';
import { Task } from '../Task'
import { TASKS } from '../mock-tasks';
import { AircraftComponent } from '../components/aircraft/aircraft.component';
import { ElementSchemaRegistry } from '@angular/compiler';
import { elementAt } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  // here I can make functions to determine which tasks to return
  getTasks(): Task[] {


    return TASKS;
  }
  getOrderedTasks(dailyHours, currentHours): Task[] {

    TASKS.forEach(element => 
      {
 
        let curdate = new Date('June 19, 2018')
        let logDate = new Date(element.logDate);
        
        let intervalMonthsNextDueDate = addMonthsToDate(element.intervalMonths, logDate)
      if(element.logDate == null || element.intervalMonths == null)
      {
        intervalMonthsNextDueDate = null
      }

      let DaysRemainingByHoursInterval = ((element.logHours + element.intervalHours)- currentHours)
      
      
      
      DaysRemainingByHoursInterval = DaysRemainingByHoursInterval/ dailyHours;
      if(element.logHours == null || element.intervalHours == null)
      {
        DaysRemainingByHoursInterval = null
      }



let intervalHoursNextDueDate = addDaysToDate(DaysRemainingByHoursInterval, new Date('June 19, 2018')) 



if(element.logHours == null || element.intervalHours == null)
      {
        intervalHoursNextDueDate = null
      }
        if(intervalMonthsNextDueDate == null)
        {element.nextDueDate = intervalHoursNextDueDate}
        else if (intervalHoursNextDueDate == null){
          element.nextDueDate = intervalMonthsNextDueDate;
        }
        else if(intervalMonthsNextDueDate < intervalHoursNextDueDate)
        {element.nextDueDate = intervalMonthsNextDueDate}
        else{element.nextDueDate =new Date( intervalHoursNextDueDate)}
        // element.formattedNextDueDate = element.nextDueDate.toString();
        element.formattedLogDate = element.logDate.toString();
        let newStr = element.formattedLogDate.replace("00:00:00 GMT-0400 (Eastern Daylight Time)","");
        element.formattedLogDate = newStr;
        // element.formattedNextDueDate = element.nextDueDate.toString();
     
        if(element.nextDueDate !== null){
          element.formattedNextDueDate = element.nextDueDate.toString();
          let newStr = element.formattedNextDueDate.replace("00:00:00 GMT-0400 (Eastern Daylight Time)","");
          element.formattedNextDueDate = newStr;
          newStr = element.formattedNextDueDate.replace("00:00:00 GMT-0500 (Eastern Standard Time)", "")
          element.formattedNextDueDate = newStr;
        }
      })

  const distantFuture = new Date(864000000000000)
let myTasks = TASKS.sort((a,b) => {
  
  let dateA = a.nextDueDate ? new Date(a.nextDueDate) : distantFuture;
let dateB = b.nextDueDate ? new Date(b.nextDueDate) : distantFuture;
return dateA.getTime() - dateB.getTime()
})

return myTasks;
  }
}

function addMonthsToDate(months : number, date = new Date()){
  date.setMonth(date.getMonth() + months);
  return date;
}
function addDaysToDate(days : number, date = new Date()){
  date.setDate(date.getDate() + days);
  return date;
}

