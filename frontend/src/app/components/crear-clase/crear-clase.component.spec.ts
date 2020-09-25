import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { CrearClaseComponent } from './crear-clase.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog/';
import {MatDialog}from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

fdescribe('CrearClaseComponent', () => {
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

  fdescribe('Given a string', () => {
    fdescribe('when i send true', () => {
      fit('then  convert into json the result resp.resp is true', () => {
        expect(component.OnResT('ejemplo1').resp).toBeTruthy();
      });
      fit('then  convert into json the result resp.Clase is 2', () => {
        expect(component.OnResT('ejemplo1').Clase).toEqual('ejemplo1');
      });
    });
  });
});
