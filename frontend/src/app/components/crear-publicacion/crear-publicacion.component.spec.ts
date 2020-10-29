import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPublicacionComponent } from './crear-publicacion.component';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { CrearPublicacionService } from '../../services/crear_publicacion/crear-publicacion.service';

fdescribe('CrearPublicacionComponent', () => {
  let component: CrearPublicacionComponent;
  let fixture: ComponentFixture<CrearPublicacionComponent>;

  let ps: CrearPublicacionService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CrearPublicacionComponent],
      imports: [ToastrModule.forRoot(),
        HttpClientTestingModule,
        RouterTestingModule],
      providers: [FormBuilder]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    sessionStorage.setItem('tipo_usuario', 'catedratico')
    fixture = TestBed.createComponent(CrearPublicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fdescribe("Dado tenga los caracteres minimos", function () {
    let cadena = 'Muchachos recuerden que la tarea se entrega el proximo jueves'
    fdescribe("Cuando cree una publicacion", function () {
      it("Entonces no hay errores de caracteres minimos", function () {
        expect(component.minlenght(cadena.length)).toBeTruthy();
      });
    });
  });

  fdescribe("Dado no tenga los caracteres minimos", function () {
    let cadena = 'Mu'
    fdescribe("Cuando cree una publicacion", function () {
      it("Entonces no hay errores de caracteres minimos", function () {
        expect(component.minlenght(cadena.length)).toBeFalsy();
      });
    });
  });

  fdescribe("Dado tenga demasiado caracteres", function () {
    let cadena = 'Muchachos recuerden que la tarea se entrega el proximo jueves'.repeat(100)
    fdescribe("Cuando cree una publicacion", function () {
      it("Entonces hay errores en el maximo de caracteres aceptados", function () {
        expect(component.maxlenght(cadena.length)).toBeFalsy();
      });
    });
  });

  fdescribe("Dado no exceda el numero maximo de caracteres", function () {
    let cadena = 'Mu'
    fdescribe("Cuando cree una publicacion", function () {
      it("Entonces no hay errores en el maximo de caracteres", function () {
        expect(component.maxlenght(cadena.length)).toBeTruthy();
      });
    });
  });

  fdescribe("Dado ingrese informacion correcta", async () => {
    let publicacion = "asdfasdf"
    fdescribe("Cuando cree una publicacion", async () => {
      it("Entonces deberia crearse la publicacion", async function (done) {
        spyOn(component, 'crearpublicacion').and.returnValue(new Promise((resolve, reject) => { resolve(true) }));
        expect(await component.crearpublicacion(publicacion)).toBeTruthy();
        done();
      });
    });
  });

  fdescribe("Dado ingrese informacion incorrecta", async () => {
    let publicacion = "a"
    fdescribe("Cuando cree una publicacion", async () => {
      it("Entonces no deberia crearse la publicacion", async function (done) {
        spyOn(component, 'crearpublicacion').and.returnValue(new Promise((resolve, reject) => { resolve(false) }));
        expect(await component.crearpublicacion(publicacion)).toBeFalsy();
        done();
      });
    });
  });

});
