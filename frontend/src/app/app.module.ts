import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CrearTareaComponent } from './components/crear-tarea/crear-tarea.component';
import { ToastrModule } from 'ngx-toastr';
import { UpdateTareaComponent } from './components/update-tarea/update-tarea.component';
import { VerTareasComponent } from './components/ver-tareas/ver-tareas.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxMatFileInputModule } from '@angular-material-components/file-input';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { EntregarTareaComponent } from './components/entregar-tarea/entregar-tarea.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogoComponent } from './components/dialogo/dialogo.component';
import { LoginComponent } from './components/login/login.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { VerExamenesComponent } from './components/ver-examenes/ver-examenes.component';
import { UpdateExamenComponent } from './components/update-examen/update-examen.component';
import { CrearExamenComponent } from './components/crear-examen/crear-examen.component';
import { CrearPreguntaComponent } from './components/crear-pregunta/crear-pregunta.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';

import { DialogoEliminarExamenComponent } from './components/dialogo-eliminar-examen/dialogo-eliminar-examen.component';
import { CrearClaseComponent } from './components/crear-clase/crear-clase.component';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NavbarComponent } from './components/navbar/navbar.component';


import { A11yModule } from '@angular/cdk/a11y';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { DemoComponent } from './components/demo/demo.component';
import { NotaEstudiantesComponent } from './components/nota-estudiantes/nota-estudiantes.component';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { UnirseClaseComponent } from './components/unirse-clase/unirse-clase.component';
import { ControlNotasEstudianteComponent } from './components/control-notas-estudiante/control-notas-estudiante.component';
import { ResolverExamenComponent } from './components/resolver-examen/resolver-examen.component';
import { UnirseAClaseService } from './services/unirse_a_clase/unirse-a-clase.service';
import { VerCursosEstudianteComponent } from './components/ver-cursos-estudiante/ver-cursos-estudiante.component';
import { PrincipalEstudianteComponent } from './components/principal-estudiante/principal-estudiante.component';
import { InicioProfesorComponent } from './components/inicio-profesor/inicio-profesor.component';
import { VistaCursosProfesorComponent } from './components/vista-cursos-profesor/vista-cursos-profesor.component';
import { CrearPublicacionComponent } from './components/crear-publicacion/crear-publicacion.component';
import { VerExamenesEstudianteComponent } from './components/ver-examenes-estudiante/ver-examenes-estudiante.component';
import { ActualizarPublicacionComponent } from './components/actualizar-publicacion/actualizar-publicacion.component';
import { SelectTareaComponent } from './components/select-tarea/select-tarea.component';
import { TareasClaseComponent } from './components/tareas-clase/tareas-clase.component';


@NgModule({
  declarations: [
    AppComponent,
    CrearTareaComponent,
    VerTareasComponent,
    EntregarTareaComponent,
    UpdateTareaComponent,
    DialogoComponent,
    LoginComponent,
    VerExamenesComponent,
    UpdateExamenComponent,
    CrearExamenComponent,
    CrearPreguntaComponent,
    DialogoEliminarExamenComponent,
    NavbarComponent,
    DemoComponent,
    CrearClaseComponent,
    NotaEstudiantesComponent,
    CrearUsuarioComponent,
    UnirseClaseComponent,
    ControlNotasEstudianteComponent,
    ResolverExamenComponent,
    VerCursosEstudianteComponent,
    PrincipalEstudianteComponent,
    InicioProfesorComponent,
    VistaCursosProfesorComponent,
    CrearPublicacionComponent,
    ActualizarPublicacionComponent,
    SelectTareaComponent,
    VerExamenesEstudianteComponent,
    TareasClaseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxMatFileInputModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatExpansionModule,
    NgxDropzoneModule,
    FormsModule,
    MatDialogModule, // <--- Aquí
    MatSnackBarModule,
    MatStepperModule,
    MatSelectModule,
    MatListModule,
    MatRadioModule,

    A11yModule,
    ClipboardModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatChipsModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    PortalModule,
    ScrollingModule,


  ],
  providers: [MatDatepickerModule, { provide: MatDialogRef, useValue: {} }, { provide: MAT_DIALOG_DATA, useValue: [] }],
  bootstrap: [AppComponent],
  entryComponents: [
    DialogoComponent, // <--- Aquí
  ]
})
export class AppModule { }
