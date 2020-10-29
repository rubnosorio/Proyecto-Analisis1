import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastrModule } from 'ngx-toastr';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from '../login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ActualizarPublicacionComponent } from './actualizar-publicacion.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { convertToParamMap } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { baseURL } from '../../services/shared/baseURL';

fdescribe('Dado que quiero actualizar una publicacion', () => {
  let component: ActualizarPublicacionComponent;
  let fixture: ComponentFixture<ActualizarPublicacionComponent>;
  let mock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ToastrModule.forRoot(),
        HttpClientTestingModule,
        BrowserAnimationsModule,
        RouterTestingModule.withRoutes(
          [
            {
              path: 'login',
              component: LoginComponent
            }
          ]
        ),
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
    mock = TestBed.inject(HttpTestingController);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarPublicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Entonces obtengo el parametro de la publicacion a actualizar', () => {
    var res = component.obtenerParametro();
    expect(res).toBeTrue();
  });

  it('Entonces entonces envio la informacion de la publicacion a actualizar', (done) => {
    var res = {message: "Todo correcto"}
    component.actualizarPublicacion();
    var req = mock.expectOne(baseURL + 'actualizar-publicacion');
    req.flush(res);
    expect(req.request.url).toEqual(baseURL + 'actualizar-publicacion');
    done();
  });

});
