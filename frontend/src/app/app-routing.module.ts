import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearTareaComponent } from './components/crear-tarea/crear-tarea.component';

const routes: Routes = [
  {
    path: 'creartarea',
    component: CrearTareaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
