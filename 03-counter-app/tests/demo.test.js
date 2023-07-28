
describe('Pruebas en demo', () => { 
  test('esta prueba no debe de fallar',()=>{
    const message1 = 'Hola Mundo';
    const message2 = message1.trim();
    expect(message1).toBe(message2);
  })
})