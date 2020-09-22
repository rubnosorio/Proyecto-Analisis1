import { TestBed } from '@angular/core/testing';

import { CrearUsuarioService } from './crear-usuario.service';

fdescribe('Given que se quiere mandar usuarios al servidor', () => {
  let service: CrearUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrearUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deberia existir la importacion de la url de la api', () => {
    let base64 = service.getbaseURL()
    expect(base64).toBeTruthy();
  });
});
