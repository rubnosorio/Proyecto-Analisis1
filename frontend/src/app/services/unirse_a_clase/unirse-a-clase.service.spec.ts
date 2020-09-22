import { TestBed } from '@angular/core/testing';
import { async, ComponentFixture } from '@angular/core/testing';
import { UnirseAClaseService } from './unirse-a-clase.service';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';


fdescribe('UnirseAClaseService', () => {
  let service: UnirseAClaseService;
  var http: HttpClient;
  let existe:boolean;

  
  
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatDialogModule,
        MatCardModule,
        HttpClientModule

      ],
      providers: [{provide: ToastrService, useValue: ToastrService},UnirseAClaseService, HttpClient]
    });
    service = TestBed.inject(UnirseAClaseService);
  }));


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  fdescribe("Given Servicio y DB unirse a clase", ()=> {
    fdescribe("When llamo metodo post a backend ", ()=> {
      fit("Then debería verificar si existe esa clase e insertarlo", function(done) {
        service.PostFakeServiceDB().subscribe((res:any[])=>{
          var mockdb=res;var i:number;
          var mockPost= jasmine.createSpy().and.callFake(function(nombre:string){
          
            for( i=0;i<mockdb.length;i++){
              if(mockdb[i].nombre_clase==nombre){
                return 404;
              }
            }
            return 200;
          });
          expect(mockPost('Teoría des sitemas 1')).toEqual(200);
          
        });
        done();
      });
    });
  });
  
});
