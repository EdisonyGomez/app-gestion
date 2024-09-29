import { Injectable } from "@angular/core";
import { PersonRepository } from "../repositories/person-repository";
import { Skill } from "src/domain/skill/models/skill";

@Injectable({
    providedIn: 'root'
})


export class AddSkillUseCase {

    constructor(private personRepository: PersonRepository){}


    execute(taskId: number, personName: string, skill: Skill):void {
        return this.personRepository.addSkillToPerson(taskId, personName, skill);
    }
}