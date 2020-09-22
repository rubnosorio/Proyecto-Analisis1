import { Tarea } from './tarea';

describe('Tarea', () => {
  it('should create an instance', () => {
    expect(new Tarea(1, "Tarea de Prueba", "Esta es una prueba y aca ira la descripcion de la tarea", "", "asdasd/asdad", "25/08/2020 18:12",5)).toBeTruthy();
  });
});
