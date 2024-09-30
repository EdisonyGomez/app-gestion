import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { AddTaskUseCase } from 'src/domain/task/useCases/add-task.useCase';
import { TaskService } from '../../services/task.service'; // Asegúrate de importar el TaskService
import { Task } from 'src/domain/task/models/task';

@Component({
  selector: 'app-formulario-tarea',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulario-tarea.component.html',
  styleUrls: ['./formulario-tarea.component.css'],
})
export class FormularioTareaComponent {
  taskForm: FormGroup;

  constructor(private fb: FormBuilder, private taskService: TaskService) { // Inyecta el TaskService
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      people: this.fb.array([]),
    });
  }

  get people(): FormArray {
    return this.taskForm.get('people') as FormArray;
  }

  getSkills(personIndex: number): FormArray {
    return this.people.at(personIndex).get('skills') as FormArray;
  }

  addPerson() {
    const personForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(5)]],
      age: [null, [Validators.required, Validators.min(18)]],
      skills: this.fb.array([this.fb.control('', Validators.required)]),
    });
    this.people.push(personForm);
  }

  addSkill(personIndex: number) {
    const skills = this.getSkills(personIndex);
    skills.push(this.fb.control('', Validators.required));
  }

  removeSkill(personIndex: number, skillIndex: number) {
    const skills = this.getSkills(personIndex);
    skills.removeAt(skillIndex);
  }

  removePerson(personIndex: number) {
    this.people.removeAt(personIndex);
  }

  submit() {
    if (this.taskForm.valid) {
      const newTask: Task = {
        id: Date.now(), // Genera un ID único para la tarea
        title: this.taskForm.value.title,
        completed: false,
        people: this.taskForm.value.people.map((person: { fullName: string; age: number; skills: any; }) => ({
          fullName: person.fullName,
          age: person.age,
          skills: person.skills
        })),
        
      };

      // Llama al servicio para agregar la nueva tarea
      this.taskService.addTask(newTask); 

      console.log(this.taskForm.value); // Log para depuración
      this.taskForm.reset(); // Restablece el formulario
    }
  }
}
