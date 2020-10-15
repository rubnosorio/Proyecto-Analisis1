import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoEliminarExamenComponent } from './dialogo-eliminar-examen.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogRef } from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('DialogoEliminarExamenComponent', () => {
  let component: DialogoEliminarExamenComponent;
  let fixture: ComponentFixture<DialogoEliminarExamenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogoEliminarExamenComponent ],
      imports: [
        ReactiveFormsModule,
        FormsModule,
      ],
      providers: [MatDatepickerModule, {provide: MatDialogRef, useValue: {}},{provide: MAT_DIALOG_DATA, useValue: []}],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogoEliminarExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
