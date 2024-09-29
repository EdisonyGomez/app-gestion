import { Injectable } from "@angular/core";
import { TaskRepository } from "../repositories/task-repository";

@Injectable({
    providedIn: 'root'
})

export class SetTaskCompletedUseCase{

    constructor(private taskRepository: TaskRepository){}

    execute(taskId: number): void{
        return this.taskRepository.setTaskCompletion(taskId);
    }
}