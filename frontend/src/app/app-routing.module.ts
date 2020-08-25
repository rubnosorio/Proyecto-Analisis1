import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateTareaComponent } from './components/update-tarea/update-tarea.component';


const routes: Routes = [
  {
    path: 'update_tarea',
    component: UpdateTareaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
