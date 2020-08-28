import { Tarea } from './tarea';

describe('Tarea', () => {
  it('should create an instance', () => {
    expect(new Tarea(0,"Titulo de prueba para Tarea 0","Descripcion de prueba para las instrucciones de una tarea 0","asdasd","24/08/2020 11:15")).toBeTruthy();
  });
});
