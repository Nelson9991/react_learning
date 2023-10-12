import { retornaArreglo } from '../../src/base-pruebas/07-deses-arr.js';

describe('Pruebas en 07-deses-arr', () => {
  test('debe retornar un string y un numero', () => {
    const [letters, numbers] = retornaArreglo();

    expect(letters).toBe('ABC');
    expect(numbers).toBe(123);

    // Esperamos que letters tenga cualquier string
    expect(typeof letters).toBe('string');

    // Esperamos que numbers tenga cualquier numero
    expect(typeof numbers).toBe('number');

    // Esperamos que letters tenga cualquier string
    expect(letters).toEqual(expect.any(String));
  });
});
