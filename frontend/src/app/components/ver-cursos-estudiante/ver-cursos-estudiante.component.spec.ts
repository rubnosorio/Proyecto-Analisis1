import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerCursosEstudianteComponent } from './ver-cursos-estudiante.component';

describe('VerCursosEstudianteComponent', () => {
  let component: VerCursosEstudianteComponent;
  let fixture: ComponentFixture<VerCursosEstudianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
