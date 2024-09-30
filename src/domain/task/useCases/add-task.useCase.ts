import { Injectable } from "@angular/core";
import { Task } from "../models/task";
import { TaskService } from "src/presentation/app/dashboard/services/task.service";

@Injectable({
    providedIn: 'root'
})

export class AddTaskUseCase{
    tasks: Task[] = [];

    constructor(private taskStateService: TaskService) {}
 
    createTask(title: string): Task {
      const newTask: Task = {
        id: Date.now(),
        title,
        completed: false,
        people: []
      };
  
      // Añadir la nueva tarea al estado compartido
      // this.taskStateService.addTask(newTask);
  
      return newTask;
    }
}