import { Injectable } from "@angular/core";
import { Task } from "../models/task";

@Injectable({
    providedIn: 'root'
})

export class GetTaskUseCase{
    tasks: Task[] = [];

    constructor(){}

    filterTasks(completed: boolean): Task[] {
        return this.tasks.filter(task => task.completed === completed);
      }
}