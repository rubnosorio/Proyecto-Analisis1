import { Usuario } from './usuario';

fdescribe('Usuario', () => {
  it('deberia crear una instancia', () => {
    expect(new Usuario(0, "", "", "", "", "")).toBeTruthy();
  });
});
