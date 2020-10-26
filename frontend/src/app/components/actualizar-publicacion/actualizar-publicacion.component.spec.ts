import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarPublicacionComponent } from './actualizar-publicacion.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { convertToParamMap } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

fdescribe('Dado que quiero actualizar una publicacion', () => {
  let component: ActualizarPublicacionComponent;
  let fixture: ComponentFixture<ActualizarPublicacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      declarations: [ ActualizarPublicacionComponent ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: convertToParamMap({ id: 1 }),
            },
          },
        },
      ],
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
    var res = component.obtenerParametro();
    expect(res).toBeTrue();
  });
});
