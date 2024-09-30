import { Injectable } from "@angular/core";
import { Task } from "../models/task";

@Injectable({
    providedIn: 'root'
})

export class DeleteTaskUseCase{
    tasks: Task[] = [];

    constructor(){}deleteTask(taskId: number): Task[] {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
    return this.tasks;
  }

}