import { Skill } from "src/domain/skill/models/skill";

export abstract class PersonRepository {

    abstract addSkillToPerson(taskId: number, personName: string, skill: Skill): void;

    abstract removeSkillFromPerson(taskId: number, personName: string, skillName: string): void ;
}