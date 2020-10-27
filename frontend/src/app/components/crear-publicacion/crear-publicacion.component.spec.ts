import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPublicacionComponent } from './crear-publicacion.component';

fdescribe('CrearPublicacionComponent', () => {
  let component: CrearPublicacionComponent;
  let fixture: ComponentFixture<CrearPublicacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearPublicacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPublicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe("Dado tenga los caracteres minimos", function () {
    let cadena = 'Muchachos recuerden que la tarea se entrega el proximo jueves'
    beforeEach(function () {

    });
    describe("Cuando cree una publicacion", function () {
      beforeEach(function () {

      });
      it("Entonces no hay errores de caracteres minimos", function () {
        expect(component.minlenght(cadena.length)).toBeTruthy();
      });
    });
  });

  describe("Dado no tenga los caracteres minimos", function () {
    let cadena = 'Mu'
    beforeEach(function () {

    });
    describe("Cuando cree una publicacion", function () {
      beforeEach(function () {

      });
      it("Entonces no hay errores de caracteres minimos", function () {
        expect(component.minlenght(cadena.length)).toBeFalsy();
      });
    });
  });

});
