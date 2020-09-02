import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateExamenComponent } from './update-examen.component';

describe('UpdateExamenComponent', () => {
  let component: UpdateExamenComponent;
  let fixture: ComponentFixture<UpdateExamenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateExamenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Examen no nulo', () => {
    expect(component.examen).not.toEqual(null);
  });
  it('Examen con Preguntas', () => {
    expect(component.examen.num_preguntas).not.toEqual(0);
  });
});
