import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerCursosEstudianteComponent } from './ver-cursos-estudiante.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from '../login/login.component';

describe('VerCursosEstudianteComponent', () => {
  let component: VerCursosEstudianteComponent;
  let fixture: ComponentFixture<VerCursosEstudianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes(
          [
            {
              path: 'login',
              component: LoginComponent
            }
          ]
        ),
      ],
      declarations: [ VerCursosEstudianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerCursosEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
