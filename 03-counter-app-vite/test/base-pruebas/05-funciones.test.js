import {
  getUser,
  getUsuarioActivo,
} from '../../src/base-pruebas/05-funciones.js';

describe('Pruebas en 05-funciones.test.js', () => {
  test('getUser debe de rotornar un objeto', () => {
    const testUser = {
      uid: 'ABC123',
      username: 'El_Papi1502',
    };

    const user = getUser();
    console.log(user);

    // Cuando se comparan objetos, se debe usar toEqual
    expect(user).toEqual(testUser);
  });

  test('getUsuarioActivo debe de retornar un objeto', () => {
    const nombre = 'Juan';
    const testUser = {
      uid: 'ABC567',
      username: nombre,
    };

    const user = getUsuarioActivo(nombre);
    console.log(user);

    expect(user).toEqual(testUser);
  });
});
