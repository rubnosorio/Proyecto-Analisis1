import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearUsuarioComponent } from './crear-usuario.component';
describe('CrearUsuarioComponent', () => {
  let component: CrearUsuarioComponent;
  let fixture: ComponentFixture<CrearUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deberia existir un form group', () => {
    expect(component.userFG).toBeTruthy();
  });

  it('Deberia retornar true para un registro exitoso', () => {
    expect(component.registrar()).toBeTruthy();
  });

  it('Deberia ser valido el from group', () => {
    
    expect(!component.userFG.valid).toBeTruthy();
  });
});
