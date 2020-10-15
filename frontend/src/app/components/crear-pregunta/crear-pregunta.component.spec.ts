import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPreguntaComponent } from './crear-pregunta.component';

import { MatDialogRef } from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('CrearPreguntaComponent', () => {
  let component: CrearPreguntaComponent;
  let fixture: ComponentFixture<CrearPreguntaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
      ],
      declarations: [CrearPreguntaComponent],
      providers: [{provide: MatDialogRef, useValue: {}},{provide: MAT_DIALOG_DATA, useValue: []}],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPreguntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
