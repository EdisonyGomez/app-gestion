import { Injectable } from "@angular/core";
import { TaskRepository } from "../repositories/task-repository";
import { Task } from "../models/task";

@Injectable({
    providedIn: 'root'
})

export class AddTaskUseCase{

    constructor(private taskRepository: TaskRepository){}

    execute(task: Task): void{
        return this.taskRepository.addTask(task);
    }
}