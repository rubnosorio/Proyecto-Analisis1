import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card'
import { MatDividerModule } from '@angular/material/divider'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';

import { VerTareasComponent } from './ver-tareas.component';
import { baseURL } from '../../services/shared/baseURL';
import { Tarea } from '../../models/tarea'
import { By } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

describe('Dado solicito las tareas creadas', () => {
  let component: VerTareasComponent;
  let fixture: ComponentFixture<VerTareasComponent>;
  var array
  let httpMock: HttpTestingController;
  const mockRes = [
    new Tarea(1,"1","1","1","1","1",1),
    new Tarea(2,"2","2","2","2","2",2),
    new Tarea(3,"3","3","3","3","3",3),
    new Tarea(4,"4","4","4","4","4",4),
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        MatCardModule,
        MatDividerModule,
        ReactiveFormsModule,
        FormsModule,
        MatButtonModule,
        MatExpansionModule,
        ToastrModule.forRoot(),
        HttpClientTestingModule,
        MatDialogModule
      ],
      declarations: [VerTareasComponent],
      providers: [MatDatepickerModule, {provide: MatDialogRef, useValue: {}},{provide: MAT_DIALOG_DATA, useValue: []}],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpMock = TestBed.inject(HttpTestingController)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it("Entonces las solicito al servicio", async () => {
    const req = httpMock.expectOne(baseURL+'ver_tareas');
    req.flush(mockRes);
    array = component.tareas
    expect(array.length).toEqual(4)
  })

});
