import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VerTareasComponent } from './components/ver-tareas/ver-tareas.component';

const routes: Routes = [
  {
    path: 'ver-tareas',
    component: VerTareasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
