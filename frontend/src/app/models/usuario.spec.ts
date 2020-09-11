import { Usuario } from './usuario';

describe('Usuario', () => {
  it('should create an instance', () => {
    expect(new Usuario(1,'mario alejando','gonzales perez','mario123','1234','mario123@gmail.com')).toBeTruthy();
  });
});
