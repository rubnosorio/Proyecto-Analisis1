import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarPublicacionComponent } from './actualizar-publicacion.component';

describe('ActualizarPublicacionComponent', () => {
  let component: ActualizarPublicacionComponent;
  let fixture: ComponentFixture<ActualizarPublicacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizarPublicacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarPublicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
