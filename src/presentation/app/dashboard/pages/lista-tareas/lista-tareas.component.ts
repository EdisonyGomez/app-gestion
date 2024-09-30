import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddTaskUseCase } from 'src/domain/task/useCases/add-task.useCase';
import { TaskService } from '../../services/task.service';
import { SetTaskCompletedUseCase } from 'src/domain/task/useCases/set-task-completed.useCase';
import { GetTaskUseCase } from 'src/domain/task/useCases/get-task.useCase';
import { DeleteTaskUseCase } from 'src/domain/task/useCases/delete-task.useCase';
import { Observable } from 'rxjs';
import { Task } from 'src/domain/task/models/task';

@Component({
  selector: 'app-lista-tareas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent {
  // Observable que contendrá la lista de tareas
  tasks$!: Observable<Task[]>;

  constructor(
    private taskStateService: TaskService) {
      this.tasks$ = this.taskStateService.tasks$;
  }

  ngOnInit() {
    // se obtiene las tareas desde la API y se actualiza el estado en el servicio
    this.taskStateService.getTasks().subscribe(tasks => {
      this.taskStateService.setTasks(tasks);
    });
  }

  // Método para marcar una tarea como completada
  completeTask(taskId: number) {
    this.tasks$.subscribe(tasks => {
      const updatedTasks = tasks.map(task =>
        task.id === taskId ? { ...task, completed: true } : task
      );
      this.taskStateService.setTasks(updatedTasks); 
    }).unsubscribe(); 
  }

  // Método para eliminar una tarea
  deleteTask(taskId: number) {
    this.tasks$.subscribe(tasks => {
      const updatedTasks = tasks.filter(task => task.id !== taskId);
      this.taskStateService.setTasks(updatedTasks); 
    }).unsubscribe();  
  }


}
