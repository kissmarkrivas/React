import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Prueba en 05-funciones', () => { 
  test('getUser debe de retornar un objeto', () => { 
    const testUser = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    }

    const user = getUser();
    expect(testUser).toEqual(user)
  })

  test('getUsuarioActivo debe de retornar un objeto', () => { 
    
    const name = 'kissmark'
    
    const obj = getUsuarioActivo(name)

    const testObjeto = {
      uid: 'ABC567',
      username: name
    }

    const user = getUser();
    expect(testObjeto).toEqual(obj)
  })
})