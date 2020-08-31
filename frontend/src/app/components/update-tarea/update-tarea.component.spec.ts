import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTareaComponent } from './update-tarea.component';
import { Tarea } from 'src/app/models/tarea';

describe('UpdateTareaComponent', () => {
  let component: UpdateTareaComponent;
  let fixture: ComponentFixture<UpdateTareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateTareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Tarea no nula', () => {
    expect(component.tarea).not.toEqual(null);
  });
});
