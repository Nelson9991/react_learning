import {
  getHeroeById,
  getHeroesByOwner,
} from '../../src/base-pruebas/08-imp-exp.js';
import heroes from '../../src/data/heroes.js';

describe('pruebas en 08-imp-exp', () => {
  test('getHeroById debe retornar un heroe por Id', () => {
    const id = 1;
    const hero = getHeroeById(id);
    console.log(hero);

    expect(hero).toEqual({
      id: 1,
      name: 'Batman',
      owner: 'DC',
    });
  });

  test('getHeroById debe retornar undefined si no existe el Id', () => {
    const id = 100;
    const hero = getHeroeById(id);
    console.log(hero);

    // toBeFalsy se usa para comprobar valores negativos en una variable, como son: false, null o undefined
    expect(hero).toBeFalsy();
  });

  test('getHeroByOwner debe retornar un arreglo con los heroes de DC', () => {
    const owner = 'DC';
    const dcHeroes = getHeroesByOwner(owner);
    console.log(dcHeroes);

    expect(dcHeroes.length).toBe(3);

    expect(dcHeroes).toEqual([
      {
        id: 1,
        name: 'Batman',
        owner: 'DC',
      },
      {
        id: 3,
        name: 'Superman',
        owner: 'DC',
      },
      {
        id: 4,
        name: 'Flash',
        owner: 'DC',
      },
    ]);
  });

  test('getHeroByOwner debe retornar un arreglo con los heroes de Marvel', () => {
    const owner = 'Marvel';
    const marvelHeroes = getHeroesByOwner(owner);
    console.log(marvelHeroes);

    expect(marvelHeroes.length).toBe(2);
    expect(marvelHeroes).toEqual(
      heroes.filter((heroe) => heroe.owner === owner),
    );
  });
});
