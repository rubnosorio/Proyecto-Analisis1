import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { UnirseClaseComponent } from './unirse-clase.component';
import { MatCardModule } from '@angular/material/card';
import { ToastrService } from 'ngx-toastr';
import { HttpClientModule, HttpClient } from '@angular/common/http';


describe('UnirseClaseComponent', () => {
  let component: UnirseClaseComponent;
  let fixture: ComponentFixture<UnirseClaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatDialogModule,
        MatCardModule,
        HttpClientModule
      ],
      providers: [
        {provide: ToastrService, useValue: ToastrService},HttpClient
      ],
      declarations: [ UnirseClaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnirseClaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 

  fit('Vérificar longitud Código válido',()=>{
    expect(component.CodigoValido('abcd-ssde')).toBeTruthy();
  });

});
