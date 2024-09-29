import { Injectable } from "@angular/core";
import { TaskRepository } from "../repositories/task-repository";
import { Person } from "src/domain/person/models/person";

@Injectable({
    providedIn: 'root'
})

export class AddPersonUseCase{

    constructor(private taskRepository: TaskRepository){}

    execute(taskId: number, person: Person):void{
        return this.taskRepository.addPersonToTask(taskId, person);
    }
}