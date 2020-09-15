import { NotaEstudiante } from './nota-estudiante';

describe('NotaEstudiante', () => {
  it('Deberia crear un estudiante con sus notas', () => {
    expect(new NotaEstudiante(1,'Erick','Lemus',[])).toBeTruthy();
  });
});
