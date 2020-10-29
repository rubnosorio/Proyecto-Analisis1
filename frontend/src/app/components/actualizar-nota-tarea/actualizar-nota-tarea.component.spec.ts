import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarNotaTareaComponent } from './actualizar-nota-tarea.component';

describe('ActualizarNotaTareaComponent', () => {
  let component: ActualizarNotaTareaComponent;
  let fixture: ComponentFixture<ActualizarNotaTareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizarNotaTareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarNotaTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
