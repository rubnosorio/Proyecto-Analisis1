import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaCursosProfesorComponent } from './vista-cursos-profesor.component';
import {VistaCursosPofesorService} from '../../services/vista_cursos_profesor/vista-cursos-pofesor.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from '../login/login.component';
import { PrincipalEstudianteComponent } from '../principal-estudiante/principal-estudiante.component';
import { MatDialogModule } from '@angular/material/dialog';

describe('VistaCursosProfesorComponent', () => {
  let component: VistaCursosProfesorComponent;
  let fixture: ComponentFixture<VistaCursosProfesorComponent>;
  let service: VistaCursosPofesorService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatDialogModule,
        HttpClientModule,
        RouterTestingModule.withRoutes(
          [
            {
              path: 'login',
              component: LoginComponent
            },
            {
              path: 'principal_profesor',
              component: PrincipalEstudianteComponent
            }
          ]
        ),

      ],
      providers: [{provide: ToastrService, useValue: ToastrService},VistaCursosPofesorService, HttpClient],
      declarations: [ VistaCursosProfesorComponent ]
    })
    .compileComponents();
    service = TestBed.inject(VistaCursosPofesorService);
  }));

  beforeEach(() => {
    sessionStorage.setItem("id_usuario","1");
    fixture = TestBed.createComponent(VistaCursosProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    sessionStorage.removeItem("id_usuario");
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Given a list of clases', () => {
    describe('when i want to see the list', () => {
      it('then get the clases', function (done) {
        service.getFakeClasesDB().subscribe((res:any[])=>{
          var mockdb=res;var i:number;
          var mockGet= jasmine.createSpy().and.callFake(function(){
            if(mockdb.length>0){
              return true;
            }
            return false;    
          });
          expect(mockGet()).toEqual(true);
          done();
        });
      });
    });
  });
});
