import { getImagen } from "../../src/base-pruebas/11-async-await";


describe('Prueba en 11-async-await', () => { 
  test('getImage debe de retornar un url de la imagen', async() => { 
    const url = await getImagen();
    console.log(url);
    expect (typeof url).toBe('string');
   })
})