import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaPublicacionesEComponent } from './vista-publicaciones-e.component';

describe('VistaPublicacionesEComponent', () => {
  let component: VistaPublicacionesEComponent;
  let fixture: ComponentFixture<VistaPublicacionesEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaPublicacionesEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaPublicacionesEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
