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
import { NotaEstudiantesComponent } from "./components/nota-estudiantes/nota-estudiantes.component";
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { UnirseClaseComponent } from './components/unirse-clase/unirse-clase.component';
import { ControlNotasEstudianteComponent } from './components/control-notas-estudiante/control-notas-estudiante.component';
import { ResolverExamenComponent } from './components/resolver-examen/resolver-examen.component';
import { VerCursosEstudianteComponent } from './components/ver-cursos-estudiante/ver-cursos-estudiante.component';
import { PrincipalEstudianteComponent } from './components/principal-estudiante/principal-estudiante.component';
import { InicioProfesorComponent } from "./components/inicio-profesor/inicio-profesor.component";
import { CrearPublicacionComponent } from './components/crear-publicacion/crear-publicacion.component';
import {VistaCursosProfesorComponent} from './components/vista-cursos-profesor/vista-cursos-profesor.component';
import { VerExamenesEstudianteComponent } from '../app/components/ver-examenes-estudiante/ver-examenes-estudiante.component';
import { SelectTareaComponent } from "./components/select-tarea/select-tarea.component";
import { ActualizarPublicacionComponent } from './components/actualizar-publicacion/actualizar-publicacion.component';

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
    path: 'notas_estudiantes',
    component: NotaEstudiantesComponent
  },
  {
    path: 'crear-usuario',
    component: CrearUsuarioComponent
  },
  {
    path: 'unirse_clase',
    component: UnirseClaseComponent
  },
  {
    path: 'control_notas_estudiante',
    component: ControlNotasEstudianteComponent
  },
  {
    path: 'resolver_examen/:id',
    component: ResolverExamenComponent,
  },
  {
    path: 'ver_clases_estudiante',
    component: VerCursosEstudianteComponent
  },
  {
    path: 'principal_estudiante',
    component: PrincipalEstudianteComponent,
  },
  {
    path: 'principal_profesor',
    component: InicioProfesorComponent,
  },
  {
    path: 'Cursos_Profesor',
    component: VistaCursosProfesorComponent,
  },
  {
    path: 'select_tarea',
    component: SelectTareaComponent,
  },
  {
    path: 'actualizar_publicacion/:id',
    component: ActualizarPublicacionComponent,
  },
  {
    path: 'ver_examenes_estudiante',
    component: VerExamenesEstudianteComponent 
  },
  {
    path: 'crear_publicacion',
    component: CrearPublicacionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
