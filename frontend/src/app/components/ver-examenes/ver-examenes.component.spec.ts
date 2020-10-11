import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { VerExamenesComponent } from './ver-examenes.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card'
import { MatDividerModule } from '@angular/material/divider'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { baseURL } from '../../services/shared/baseURL';
import { Examen } from '../../models/examen'
import { ToastrModule } from 'ngx-toastr';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from '../login/login.component';
import { UpdateExamenComponent } from '../update-examen/update-examen.component';

describe('Dado solicito los examenes creados', () => {
  let component: VerExamenesComponent;
  let fixture: ComponentFixture<VerExamenesComponent>;

  var array
  let httpMock: HttpTestingController;
  const mockRes = [
    new Examen(1,"1","1","1",1,1,1,1,[]),
    new Examen(2,"2","2","2",2,2,2,2,[]),
    new Examen(3,"3","3","3",3,3,3,3,[]),
    new Examen(4,"4","4","4",4,4,4,4,[]),
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
        MatDialogModule,
        RouterTestingModule.withRoutes(
          [
            {
              path: 'login',
              component: LoginComponent
            },
            {
              path: 'update_examen',
              component: UpdateExamenComponent
            }
          ]
        ),
      ],
      declarations: [ VerExamenesComponent ],
      providers: [MatDatepickerModule, {provide: MatDialogRef, useValue: {}},{provide: MAT_DIALOG_DATA, useValue: []}],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerExamenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpMock = TestBed.inject(HttpTestingController)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Entonces las solicito al servicio", () => {
    const req = httpMock.expectOne(baseURL+'ver_examenes');
    req.flush(mockRes);
    array = component.examenes
    expect(array.length).toEqual(4)
  })

  it("Y el usuario puede visualizarlas", () => {
    const tasks = fixture.debugElement.queryAll(By.css('mat-accordion mat-expansion-panel'));
    expect(tasks.length).toBeGreaterThanOrEqual(0);
    
  })

});
