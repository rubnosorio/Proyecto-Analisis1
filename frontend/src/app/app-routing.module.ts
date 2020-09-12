import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearTareaComponent } from './components/crear-tarea/crear-tarea.component';
import { VerTareasComponent } from './components/ver-tareas/ver-tareas.component';
import { EntregarTareaComponent } from './components/entregar-tarea/entregar-tarea.component';
import { UpdateTareaComponent } from './components/update-tarea/update-tarea.component';
import { UpdateExamenComponent } from './components/update-examen/update-examen.component';
import { LoginComponent } from './components/login/login.component';
import { VerExamenesComponent } from './components/ver-examenes/ver-examenes.component';
import { CrearExamenComponent } from './components/crear-examen/crear-examen.component';
import { DemoComponent } from './components/demo/demo.component';
import { CrearClaseComponent } from './components/crear-clase/crear-clase.component';
import { ResolverExamenComponent } from './components/resolver-examen/resolver-examen.component';

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
    path: 'update_examen',
    component: UpdateExamenComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'ver-examenes',
    component: VerExamenesComponent,
  },
  {
    path: 'crear_examen',
    component: CrearExamenComponent,
  },
  {
    path: 'demo',
    component: DemoComponent,
  },
  {
    path: 'crear_clase',
    component: CrearClaseComponent,
  },
  {
    path: 'resolver_examen/:id',
    component: ResolverExamenComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
