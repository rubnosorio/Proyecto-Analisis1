import { TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { VerClasesEstudianteService } from './ver-clases-estudiante.service';

describe('VerClasesEstudianteService', () => {
  let service: VerClasesEstudianteService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [VerClasesEstudianteService, HttpClient]
    });
    service = TestBed.inject(VerClasesEstudianteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Obtencion correcta de clases', (done) => {
    let user = {
      id_usuario: 1
    }
    service.ObtenerClases(user).subscribe((res:any[]) => {
      expect(res.length).toBeGreaterThanOrEqual(0);
      done();
    });
  });
});
