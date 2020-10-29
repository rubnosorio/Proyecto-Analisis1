import { NotaEstudiante } from './nota-estudiante';

fdescribe('NotaEstudiante', () => {
  it('Deberia crear un estudiante con sus notas', () => {
    expect(new NotaEstudiante(1,'Erick','Lemus',[],[])).toBeTruthy();
  });
});
