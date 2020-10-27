import { ListaActividades } from './lista-actividades';

fdescribe('ListaActividades', () => {
  it('Deberia crear una nueva actividad', () => {
    expect(new ListaActividades('tarea 1')).toBeTruthy();
  });
});
