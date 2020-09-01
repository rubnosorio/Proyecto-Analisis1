import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearTareaComponent } from './components/crear-tarea/crear-tarea.component';
import { VerTareasComponent } from './components/ver-tareas/ver-tareas.component';
import { EntregarTareaComponent } from './components/entregar-tarea/entregar-tarea.component';
import { UpdateTareaComponent } from './components/update-tarea/update-tarea.component';
import { LoginComponent } from './components/login/login.component';
import { CrearExamenComponent } from './components/crear-examen/crear-examen.component';

const routes: Routes = [
  {
    path: 'creartarea',
    component: CrearTareaComponent,
  },
  {
    path: 'ver-tareas',
    component: VerTareasComponent,
  },
  {
    path: 'entregar-tarea',
    component: EntregarTareaComponent,
  },
  {
    path: 'update_tarea',
    component: UpdateTareaComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'crear_examen',
    component: CrearExamenComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
