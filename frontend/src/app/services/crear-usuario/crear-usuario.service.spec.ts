import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CrearUsuarioService } from './crear-usuario.service';

fdescribe('Given que se quiere mandar usuarios al servidor', () => {
  let service: CrearUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ]
    });
    service = TestBed.inject(CrearUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('when la URL existe', () => {
    let base64 = service.getbaseURL()
    expect(base64).toBeTruthy();
  });

  it('And el metodo para postear el usuario existe', () => {
    let res = service.postUser
    expect(res).toBeTruthy();
  });
});
