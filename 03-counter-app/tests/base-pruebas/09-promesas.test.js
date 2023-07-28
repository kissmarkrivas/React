import {getHeroeByIdAsync} from "../../src/base-pruebas/09-promesas";

describe('prueba test promesas',
	()=>{ 
		test('getHeroeById debe de retornar unhéroe',
		(done)=>{
			const id = 1; 
			getHeroeByIdAsync(id).then( heroe => { 
				expect(heroe)
				.toEqual({ 
					id: 1, 
					name: 'Batman', 
					owner: 'DC' }); 
					done();
			}) 
		}) 
		
		test('getHeroeById debe OBTENER ERROR de retornar unhéroe',
		(done)=>{
			const id = 100; 
			getHeroeByIdAsync(id).then( heroe => { 
				expect(heroe).toBeFalsy() 
					done();
			})
			.catch( error => {
				expect(error).toBe(`No se pudo encontrar el héroe`)
				done()
			})

		}) 
	})
