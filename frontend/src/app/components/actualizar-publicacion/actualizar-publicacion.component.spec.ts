import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarPublicacionComponent } from './actualizar-publicacion.component';

describe('Dado que quiero actualizar una publicacion', () => {
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

  it('entonces obtengo la publicacion a actualizar', () => {
    var res = obtenerParametro();
    expect(res).toBeTrue();
  });
});
