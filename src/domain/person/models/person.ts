import { Skill } from "src/domain/skill/models/skill";

export interface Person {
    id: number;
    fullName: string;
    age: number;
    skills: Skill[];
  }