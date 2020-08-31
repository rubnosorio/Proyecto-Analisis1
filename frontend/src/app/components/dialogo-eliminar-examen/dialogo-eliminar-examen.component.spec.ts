import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoEliminarExamenComponent } from './dialogo-eliminar-examen.component';

describe('DialogoEliminarExamenComponent', () => {
  let component: DialogoEliminarExamenComponent;
  let fixture: ComponentFixture<DialogoEliminarExamenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogoEliminarExamenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogoEliminarExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
