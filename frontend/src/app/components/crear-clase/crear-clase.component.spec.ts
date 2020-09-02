import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { CrearClaseComponent } from './crear-clase.component';
import { MatDialogRef } from '@angular/material/dialog';
import {MatDialog}from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

describe('CrearClaseComponent', () => {
  let component: CrearClaseComponent;
  let fixture: ComponentFixture<CrearClaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatInputModule,
        MatDialogModule,
        MatDialog,
        MatDialogRef
      ],
      providers: [FormBuilder, {provide: MatDialogRef, useValue: {}},{provide: MAT_DIALOG_DATA, useValue: []}],
      declarations: [ CrearClaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearClaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
