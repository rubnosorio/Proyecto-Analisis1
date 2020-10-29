import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasClaseComponent } from './tareas-clase.component';

describe('TareasClaseComponent', () => {
  let component: TareasClaseComponent;
  let fixture: ComponentFixture<TareasClaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TareasClaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TareasClaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
