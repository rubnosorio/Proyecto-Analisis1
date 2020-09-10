import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnirseClaseComponent } from './unirse-clase.component';

fdescribe('UnirseClaseComponent', () => {
  let component: UnirseClaseComponent;
  let fixture: ComponentFixture<UnirseClaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnirseClaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnirseClaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 

  fit('Vérificar Código válido',async(()=>{
    expect(component.CodigoValido('1234ad')).toBeFalsy();
  }));
});
