import { NotaExamen } from './nota-examen';

describe('NotaExamen', () => {
  it('Debería crear una nueva instancia de nota de examen', () => {
    expect(new NotaExamen(1,'examen 1',10)).toBeTruthy();
  });
});
