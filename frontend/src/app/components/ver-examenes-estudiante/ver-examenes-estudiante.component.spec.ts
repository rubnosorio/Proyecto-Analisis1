import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerExamenesEstudianteComponent } from './ver-examenes-estudiante.component';

describe('VerExamenesEstudianteComponent', () => {
  let component: VerExamenesEstudianteComponent;
  let fixture: ComponentFixture<VerExamenesEstudianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerExamenesEstudianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerExamenesEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
