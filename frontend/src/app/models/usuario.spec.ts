import { Usuario } from './usuario';

describe('Usuario', () => {
  it('deberia crear una instancia', () => {
    expect(new Usuario(0, "", "", "", "", "")).toBeTruthy();
  });
});
