import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaTareasComponent } from "./dashboard/pages/lista-tareas/lista-tareas.component";
import { HttpClientModule } from '@angular/common/http';
import { FormularioTareaComponent } from "./dashboard/pages/formulario-tarea/formulario-tarea.component";
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ListaTareasComponent,
    HttpClientModule,
    FormularioTareaComponent,
    ReactiveFormsModule
],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
