import { NonNullAssert } from "@angular/compiler";

export interface TaskItems {
    itemNumber: number,
    description: string,
    logDate: Date,
    logHours: number | null,
    intervalMonths: number | null,
    intervalHours: number | null

}
