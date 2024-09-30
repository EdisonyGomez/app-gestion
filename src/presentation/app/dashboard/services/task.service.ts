import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from 'src/domain/task/models/task';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasksSubject = new BehaviorSubject<Task[]>([]); // El estado de las tareas
  tasks$: Observable<Task[]> = this.tasksSubject.asObservable(); // Observable al que se pueden suscribir los componentes

  constructor(private http: HttpClient) {}

  // Método para obtener las tareas desde la API
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>('https://jsonplaceholder.typicode.com/todos').pipe(
      tap(tasks => this.tasksSubject.next(tasks)) // Actualiza el estado con las tareas obtenidas
    );
  }

  // Método para agregar una nueva tarea
  addTask(newTask: Task): void {
    const currentTasks = this.tasksSubject.getValue();
    this.tasksSubject.next([...currentTasks, newTask]); // Agrega la nueva tarea y actualiza el estado
  }

  // Método para establecer el nuevo estado de las tareas
  setTasks(tasks: Task[]): void {
    this.tasksSubject.next(tasks); // Actualiza el estado de las tareas
  }
}
