import { Injectable } from "@angular/core";
import { Person } from "src/domain/person/models/person";
import { Task } from "../models/task";

@Injectable({
    providedIn: 'root'
})

export class AddPersonUseCase{

    tasks: Task[] = [];


    addPersonToTask(taskId: number, person: Person): void {
        const task = this.tasks.find(t => t.id === taskId);
        if (task) {
          task.people.push(person);
        }
      }
}