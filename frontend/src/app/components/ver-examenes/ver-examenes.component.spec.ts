import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { VerExamenesComponent } from './ver-examenes.component';

describe('VerExamenesComponent', () => {
  let component: VerExamenesComponent;
  let fixture: ComponentFixture<VerExamenesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerExamenesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerExamenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("obtenienodo los examenes", () => {
    component.gets()
    var array = component.examenes
    expect(array.length).toBe(10)
  })

  it("examenes que se muestran al usuario", () => {
    const tasks = fixture.debugElement.queryAll(By.css('mat-accordion mat-expansion-panel'));
    expect(tasks.length).toBe(10);
    
  })

});
