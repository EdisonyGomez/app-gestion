import { Injectable } from "@angular/core";
import { PersonRepository } from "../repositories/person-repository";

@Injectable({
    providedIn: 'root'
})

export class RemoveSkillUseCase {

    constructor(private personRepository: PersonRepository){}


    execute(taskId: number, personName: string, skillName: string):void{
        return this.personRepository.removeSkillFromPerson(taskId, personName, skillName);
    }
}