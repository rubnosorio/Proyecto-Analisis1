import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CrearUsuarioService } from './crear-usuario.service';
import { Usuario } from '../../models/usuario'

fdescribe('Given que se quiere mandar usuarios al servidor', () => {
  let service: CrearUsuarioService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ]
    });
    service = TestBed.inject(CrearUsuarioService);
    httpMock = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('When la URL existe', () => {
    let base64 = service.getbaseURL()
    expect(base64).toBeTruthy();
  });

  it('And el metodo para postear el usuario existe', () => {
    let res = service.postUser
    expect(res).toBeTruthy();
  });

  it('Then el usuario es posteado con exito', () => {
    const mockRes = 200;
    var res = 0
    service.postUser(new Usuario(1,"prueba","prueba","prueba","prueba","prueba@prueba.com"))
    .subscribe(resAPI =>{
      res = resAPI
    })
    const req = httpMock.expectOne(service.getbaseURL()+'crear_usuario');
    req.flush(mockRes);
    console.log(req)
    expect(res).toEqual(200);
  });
});
