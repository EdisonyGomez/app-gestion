import { Person } from "src/domain/person/models/person"; 

export interface Task{
    id: number;
    title: string;
    completed: boolean;
    person: Person[];
}