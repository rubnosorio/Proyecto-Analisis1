import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { CrearClaseComponent } from './crear-clase.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog/';
import {MatDialog}from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

describe('CrearClaseComponent', () => {
  let component: CrearClaseComponent;
  let fixture: ComponentFixture<CrearClaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatDialogModule
        
      ],
      providers: [FormBuilder,{provide: MatDialogRef, useValue: {}},{provide: MAT_DIALOG_DATA, useValue: []},
      {provide: ToastrService, useValue: ToastrService}],
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

  describe('Given a string', () => {
    describe('when i send true', () => {
      it('then  convert into json the result resp.resp is true', () => {
        expect(component.OnResT('ejemplo1').resp).toBeTruthy();
      });
      it('then  convert into json the result resp.Clase is 2', () => {
        expect(component.OnResT('ejemplo1').Clase).toEqual('ejemplo1');
      });
    });
  });
});
