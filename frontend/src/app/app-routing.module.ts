import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntregarTareaComponent } from './components/entregar-tarea/entregar-tarea.component';

const routes: Routes = [
  {
    path: 'entregar-tarea',
    component: EntregarTareaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
