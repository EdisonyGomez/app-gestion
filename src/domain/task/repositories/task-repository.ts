import { Observable } from "rxjs";
import { Task } from "../models/task";
import { Person } from "src/domain/person/models/person";

export abstract class TaskRepository {
    
    abstract getTask(): Observable<[Task]>;
    
    abstract addTask(task: Task):void;

    abstract updateTask(task: Task): void;

    abstract setTaskCompletion(taskId: number): void ;

    abstract addPersonToTask(taskId: number, person: Person): void ;

    abstract removePersonFromTask(taskId: number, personName: string): void ;
}