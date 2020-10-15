import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormBuilder } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterTestingModule } from '@angular/router/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

describe('Login Component', () => {
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
        HttpClientModule,
        MatSnackBarModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatSlideToggleModule,
        RouterTestingModule.withRoutes([])
      ],
      providers: [FormBuilder, HttpClient, NavbarComponent],
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
  it('Deberia mostrar un error de maximo de caracteres', () => {
    let username = component.loginForm.controls['username'];
    username.setValue('aaaaaaaaaaaaaaaaaaaaaaaaaa');
    let password = component.loginForm.controls['password'];
    password.setValue('aaaaaaaaaaaaaaaaaaaaaaaaaa');
    username.markAsDirty();
    password.markAsDirty();
    component.onValueChanged(component.loginForm.value);
    expect(component.formErrors.username).not.toBe('');
    expect(component.formErrors.password).not.toBe('');
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

  describe("Dado inicie sesion", function () {
    let credenciales = { username: '', password: '', escatedratico: false };
    beforeEach(function () {
      credenciales.username = 'erick123';
      credenciales.password = '123456';
    });
    describe("Cuando tenga credenciales correctas", function () {
      beforeEach(function () {
        component.loginForm.setValue(credenciales);
      });
      it("Entonces inicio sesion", function () {
        component.loginForm.setValue(credenciales);
        expect(component.onSubmit()).toBeTruthy();
      });
    });
  });

  describe("Dado inicie sesion", function () {
    let credenciales = { username: '', password: '', escatedratico: false };
    beforeEach(function () {
      credenciales.username = 'erick123';
      credenciales.password = '123456';
    });
    describe("Cuando tenga credenciales correctas", function () {
      beforeEach(function () {
        component.loginForm.setValue(credenciales);
      });
      it("Entonces inicio sesion", async function () {
        component.loginForm.setValue(credenciales);
        spyOn(component, 'onSubmit').and.returnValue(new Promise((resolve, reject) => {
          resolve(true);
        }))
        let res = await component.onSubmit();
        expect(res).toBeTruthy();
      });
    });
  });

  describe("Dado inicie sesion", function () {
    let credenciales = { username: '', password: '', escatedratico: false };
    beforeEach(function () {
      credenciales.username = 'erick123s';
      credenciales.password = '123456';
    });
    describe("Cuando tenga credenciales incorrectas", function () {
      beforeEach(function () {
        component.loginForm.setValue(credenciales);
      });
      it("Entonces no inicio sesion", async function (done) {
        component.loginForm.setValue(credenciales);
        expect(await component.onSubmit()).toBeFalsy();
        done();
      });
    });
  });

});
