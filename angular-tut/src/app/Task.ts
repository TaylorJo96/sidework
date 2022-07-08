export interface Task{
    itemNumber: number,
    description: string,
    logDate: Date | null,
    formattedLogDate: string | null,
    logHours: number| null,
    intervalMonths: number | null,
    intervalHours: number| null
    nextDueDate: Date| null | number
    formattedNextDueDate: string | null
}