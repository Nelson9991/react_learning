import { getHeroeByIdAsync } from '../../src/base-pruebas/09-promesas.js';

describe('Pruebas en 09-Promesas', () => {
  test('getHeroesByIdAsync debe de retornar un heroe', (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toEqual({
        id: 1,
        name: 'Batman',
        owner: 'DC',
      });
      done();
    });
  });

  test('getHeroesByIdAsync debe de retornar un error si heroe no existe', (done) => {
    const id = 100;
    getHeroeByIdAsync(id).catch((error) => {
      expect(error).toBe('No se pudo encontrar el héroe ' + id);
      console.log(error);
      done();
    });
  });
});
