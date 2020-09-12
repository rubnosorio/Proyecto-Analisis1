import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { UnirseClaseComponent } from './unirse-clase.component';
import { MatCardModule } from '@angular/material/card';

fdescribe('UnirseClaseComponent', () => {
  let component: UnirseClaseComponent;
  let fixture: ComponentFixture<UnirseClaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatDialogModule,
        MatCardModule
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
    expect(component.CodigoValido('abcde')).toBeFalsy();
  });

  fit('Vérificar longitud Código válido',async(()=>{
    expect(component.CodigoValido('asdfasdfa')).toBeTruthy();
  }));

  fit('Vérificar guión Código válido',()=>{
    expect(component.GuionCodValido('abcd-ssde')).toBeTruthy();
  });

});
