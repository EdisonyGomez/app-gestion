import { Injectable } from "@angular/core";
import { TaskRepository } from "../repositories/task-repository";
import { Task } from "../models/task";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class GetTaskUseCase{

    constructor(private taskRepository: TaskRepository){}

    execute(): Observable<[Task]>{
        return this.taskRepository.getTask();
    }
}