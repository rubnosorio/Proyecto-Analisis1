import { EntregarTarea } from './entregar-tarea';

fdescribe('EntregarTarea', () => {
  it('should create an instance', () => {
    expect(new EntregarTarea(1,1,1,"","","",0)).toBeTruthy();
  });
});
