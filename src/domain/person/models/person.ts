import { Skill } from "src/domain/skill/models/skill";

export interface Person{
    name: string;
    age: number;
    skills: Skill[];
}