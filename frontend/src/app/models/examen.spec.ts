import { Examen } from './examen';

describe('Examen', () => {
  it('should create an instance', () => {
    expect(new Examen(0,"Examen 0", '30/08/2020 13:26', "Estas son las instrucciones que debe tener un examen.", 4, 10, 0, 1, "")).toBeTruthy();
  });
});
