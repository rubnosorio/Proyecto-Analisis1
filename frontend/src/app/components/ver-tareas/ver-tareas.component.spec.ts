import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerTareasComponent } from './ver-tareas.component';

describe('VerTareasComponent', () => {
  let component: VerTareasComponent;
  let fixture: ComponentFixture<VerTareasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerTareasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
