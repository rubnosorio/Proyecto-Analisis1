import { NotaTarea } from './nota-tarea';

fdescribe('NotaTarea', () => {
  it('debería crear una nueva tarea con los datos proporcionados', () => {
    expect(new NotaTarea(1,'tarea 1',25)).toBeTruthy();
  });
});
