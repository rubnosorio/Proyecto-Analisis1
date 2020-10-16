import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioProfesorComponent } from './inicio-profesor.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('InicioProfesorComponent', () => {
  let component: InicioProfesorComponent;
  let fixture: ComponentFixture<InicioProfesorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        MatSnackBarModule,
        BrowserAnimationsModule,
      ],
      declarations: [ InicioProfesorComponent, NavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
