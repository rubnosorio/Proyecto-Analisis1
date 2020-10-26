import { TareasUsuarioClase } from './tareas-usuario-clase';

fdescribe('TareasUsuarioClase', () => {
  it('should create an instance', () => {
    expect(new TareasUsuarioClase(1,1,1,"","",5,"","","")).toBeTruthy();
  });
});
