import { Injectable } from "@angular/core";
import { Task } from "../models/task";

@Injectable({
    providedIn: 'root'
})

export class SetTaskCompletedUseCase{
    tasks: Task[] = [];

    constructor(){}

    completeTask(taskId: number): void {
        const task = this.tasks.find(t => t.id === taskId);
        if (task) {
          task.completed = true;
        }
      }
}