import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTareaComponent } from './crear-tarea.component';

import { FormBuilder } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxMatFileInputModule } from '@angular-material-components/file-input';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from '../login/login.component';
import { NavbarComponent } from "../navbar/navbar.component";

fdescribe('Crear Tarea Component', () => {
  let component: CrearTareaComponent;
  let fixture: ComponentFixture<CrearTareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MatSnackBarModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatGridListModule,
        MatDatepickerModule,
        MatNativeDateModule,
        NgxMatFileInputModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        RouterTestingModule.withRoutes(
          [
            {
              path: 'login',
              component: LoginComponent
            }
          ]
        ),
      ],
      declarations: [CrearTareaComponent,NavbarComponent,],
    }).compileComponents();
  }));

  beforeEach(() => {
    sessionStorage.setItem("id_usuario","1")
    sessionStorage.setItem("tipo_usuario","profesor")
    sessionStorage.setItem("id_clase","1");
    fixture = TestBed.createComponent(CrearTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    sessionStorage.removeItem("id_usuario")
    sessionStorage.removeItem("tipo_usuario")
    sessionStorage.removeItem("id_clase");
  });

  it('Deberia crearse el componente', () => {
    expect(component).toBeTruthy();
  });

  it('El formulario deberia ser invalido', () => {
    expect(component.homeworkForm.valid).toBeFalsy();
  });
  it('No deberian haber errores en el formulario', () => {
    expect(component.formErrors.descripcion).toBe('');
    expect(component.formErrors.fecha_entrega).toBe('');
    expect(component.formErrors.nombre_tarea).toBe('');
  });
  it('Deberia mostrar un error de minimo de caracteres', () => {
    let nombre_tarea = component.homeworkForm.controls['nombre_tarea'];
    let descripcion = component.homeworkForm.controls['descripcion'];
    nombre_tarea.setValue('a'.repeat(1));
    descripcion.setValue('a'.repeat(1));
    nombre_tarea.markAsDirty();
    descripcion.markAsDirty();
    component.onValueChanged(component.homeworkForm.value);
    expect(nombre_tarea.invalid).toBeTruthy();
    expect(descripcion.invalid).toBeTruthy();
  });
  it('Deberia mostrar un error de maximo de caracteres', () => {
    let nombre_tarea = component.homeworkForm.controls['nombre_tarea'];
    let descripcion = component.homeworkForm.controls['descripcion'];
    nombre_tarea.setValue('a'.repeat(101));
    descripcion.setValue('a'.repeat(2001));
    nombre_tarea.markAsDirty();
    descripcion.markAsDirty();
    component.onValueChanged(component.homeworkForm.value);
    expect(nombre_tarea.invalid).toBeTruthy();
    expect(descripcion.invalid).toBeTruthy();
  });
  it('Deberia haber un error en la fecha', () => {
    let fecha = component.homeworkForm.controls['fecha_entrega'];
    fecha.setValue(new Date('12/12/2016'));
    fecha.markAsDirty();
    component.onValueChanged(component.homeworkForm.value);
    expect(component.homeworkForm.invalid).toBeTruthy();
  });
  it('Deberia tener un formulario correcto', () => {
    let nombre_tarea = component.homeworkForm.controls['nombre_tarea'];
    let descripcion = component.homeworkForm.controls['descripcion'];
    let fecha = component.homeworkForm.controls['fecha_entrega'];
    nombre_tarea.setValue('prueba');
    descripcion.setValue('prueba');
    fecha.setValue(new Date('12/12/2026'));
    nombre_tarea.markAsDirty();
    descripcion.markAsDirty();
    fecha.markAsDirty();
    component.onValueChanged(component.homeworkForm.value);
    expect(component.homeworkForm.valid).toBeTruthy();
  });
});
