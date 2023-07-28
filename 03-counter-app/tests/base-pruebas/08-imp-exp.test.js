import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('pruebas en 08-imp-exp', () => { 
  
  test('getheroe by id debe de retornar un heroe por id ', () => { 
    const id = 1;
    const heroe =getHeroeById( id )
    // console.log(heroe);
    expect(heroe).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
  });
  
  test('getheroe by id debe de retornar undefined si no existe el id ', () => { 
    const id = 100;
    const heroe =getHeroeById( id )
    // console.log(heroe);
    expect(heroe).toBeFalsy();
    // expect(heroe).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
  });

  test('getheroebyorner id debe de retornar undefined si no existe el id ', () => { 
    const owner = 'DC';
    const heroes = getHeroesByOwner( owner )
    // console.log(heroes);
    expect(heroes.length).toBe( 3 );
    expect(heroes).toEqual([
      {"id": 1, "name": "Batman", "owner": "DC"}, 
      {"id": 3, "name": "Superman", "owner": "DC"}, 
      {"id": 4, "name": "Flash", "owner": "DC"}
    ]);
    expect(heroes).toEqual( heroes.filter( (heroe) => heroe.owner === owner ))

    // expect(heroe).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
  });

  test('getheroebyorner id debe de retornar undefined si no existe el id ', () => { 
    const owner = 'Marvel';
    const heroes = getHeroesByOwner( owner )
    // console.log(heroes);
    expect(heroes.length).toBe( 2 );
    expect(heroes).toEqual( heroes.filter( (heroe) => heroe.owner === owner ))
    console.log(heroes);
    // expect(heroe).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
  });
  


 })