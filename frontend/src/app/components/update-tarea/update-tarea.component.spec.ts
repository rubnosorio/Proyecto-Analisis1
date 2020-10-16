import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTareaComponent } from './update-tarea.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from '../login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Tarea } from 'src/app/models/tarea';

describe('UpdateTareaComponent', () => {
  let component: UpdateTareaComponent;
  let fixture: ComponentFixture<UpdateTareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        ToastrModule.forRoot(),
        ReactiveFormsModule,
        FormsModule,
        MatInputModule,
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
      declarations: [ UpdateTareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    sessionStorage.setItem("id_usuario","1");
    sessionStorage.setItem("tareaactual",JSON.stringify(new Tarea(11,"tarea231","esta es la tarea 231","","","2020-09-30",10)));
    fixture = TestBed.createComponent(UpdateTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    sessionStorage.removeItem("id_usuario");
    sessionStorage.removeItem("tareaactual");
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Tarea no nula', () => {
    expect(component.tarea).not.toEqual(null);
  });
});
