import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ActualizarPublicacionService } from './actualizar-publicacion.service';

fdescribe('Dado que se quiere actualizar una publicacion', () => {
  let service: ActualizarPublicacionService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ]
    });
    service = TestBed.inject(ActualizarPublicacionService);
    httpMock = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Cuando la URL existe', () => {
    let base64 = service.getbaseURL()
    expect(base64).toBeTruthy();
  });

  it('Y el metodo para postear el usuario existe', () => {
    let res = service.update
    expect(res).toBeTruthy();
  });

  it('Then el usuario es posteado con exito', () => {
    const mockRes = 200;
    var res = 0
    service.update({publicacion: "Esta es una publicacion de prueba", fecha: "22/10/2020 23:00", id_clase: 1, id_usuario: 1 })
    .subscribe(resAPI =>{
      res = resAPI
    })
    const req = httpMock.expectOne(service.getbaseURL()+'actualizar-publicacion');
    req.flush(mockRes);
    expect(res).toEqual(200);
  });
});
