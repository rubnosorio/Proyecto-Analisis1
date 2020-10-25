import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntregarTareaComponent } from './entregar-tarea.component';
import { Tarea } from 'src/app/models/tarea';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card'
import { MatDividerModule } from '@angular/material/divider'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { baseURL } from '../../services/shared/baseURL';
import { Examen } from '../../models/examen'
import { ToastrModule } from 'ngx-toastr';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

fdescribe('Dado que quiero entregar una tarea', () => {
  let component: EntregarTareaComponent;
  let fixture: ComponentFixture<EntregarTareaComponent>;

  let httpMock: HttpTestingController;
  const mockRes = {message: "Se realizo la entrega de la tarea"};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        MatCardModule,
        MatDividerModule,
        ReactiveFormsModule,
        FormsModule,
        MatButtonModule,
        MatExpansionModule,
        ToastrModule.forRoot(),
        HttpClientTestingModule,
      ],
      declarations: [ EntregarTareaComponent ]
    })
    .compileComponents();
    httpMock = TestBed.inject(HttpTestingController)
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntregarTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Cuando obtengo una tarea especifica", () => {
    component.getTask()
    var array = component.tarea
    expect(array).toEqual(new Tarea(1, "Tarea de Prueba", "Esta es una prueba y aca ira la descripcion de la tarea", "", "asdasd/asdad", "25/08/2020 18:12",10))
  })

  it("Entonces envio la entrega al servidor", () => {
    component.files.push({name: "prueba"});
    component.sendTask("asds")
    const req = httpMock.expectOne(baseURL+'entregar_tarea');
    req.flush(mockRes);
    expect(req.request.method).toEqual('POST')
  })
});
