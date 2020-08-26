import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormBuilder } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';

describe('Crear Componente Login', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
      ],
      providers: [FormBuilder],
      declarations: [LoginComponent],
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('Deberia crearse el componente', () => {
    expect(component).toBeTruthy();
  });
  it('El formulario deberia ser invalido', () => {
    expect(component.loginForm.valid).toBeFalsy();
  });
  it('No deberian haber errores en el formulario', () => {
    expect(component.formErrors.password).toBe('');
    expect(component.formErrors.username).toBe('');
  });
});

describe('Formulario Incorrecto', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
      ],
      providers: [FormBuilder],
      declarations: [LoginComponent],
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('Deberia mostrar un error de minimo de caracteres en el nombre de usuario', () => {
    let username = component.loginForm.controls['username'];
    username.setValue('a');
    username.markAsDirty();
    component.onValueChanged(component.loginForm.value);
    expect(component.formErrors.username).not.toBe('');
  });
  it('Deberia mostrar un error de minimo de caracteres en el password', () => {
    let password = component.loginForm.controls['password'];
    password.setValue('a');
    password.markAsDirty();
    component.onValueChanged(component.loginForm.value);
    expect(component.formErrors.password).not.toBe('');
  });
  it('Deberia mostrar un error de maximo de caracteres en el nombre de usuario', () => {
    let username = component.loginForm.controls['username'];
    username.setValue('aaaaaaaaaaaaaaaaaaaaaaaaaa');
    username.markAsDirty();
    component.onValueChanged(component.loginForm.value);
    expect(component.formErrors.username).not.toBe('');
  });
  it('Deberia mostrar un error de maximo de caracteres en el password', () => {
    let password = component.loginForm.controls['password'];
    password.setValue('aaaaaaaaaaaaaaaaaaaaaaaaaa');
    password.markAsDirty();
    component.onValueChanged(component.loginForm.value);
    expect(component.formErrors.password).not.toBe('');
  });
});

describe('Formulario Incorrecto', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
      ],
      providers: [FormBuilder],
      declarations: [LoginComponent],
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('Deberia tener un formulario correcto', () => {
    let username = component.loginForm.controls['username'];
    let password = component.loginForm.controls['password'];
    username.setValue('prueba');
    password.setValue('prueba');
    username.markAsDirty();
    password.markAsDirty();
    component.onValueChanged(component.loginForm.value);
    expect(component.loginForm.valid).toBeTruthy();
  });
});
