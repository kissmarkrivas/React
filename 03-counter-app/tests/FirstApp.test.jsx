import { getByTestId, render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Prueba en fristapp', () => { 
  // test('debe de hacer test con el snapshot', () => { 
  //   const title = 'Hola soy Goku'
  //   const { container, getByText } = render(<FirstApp title={title}/>)
  //   expect( getByText(title) ).toMatchSnapshot();
  // })

  test('debe de mostrar el titulo en un h1', () => { 
    const title = 'Hola soy Goku'
    const { container, getByText, getByTestId } = render(<FirstApp title={title}/>)
    expect( getByText(title) ).toBeTruthy();

    // const h1 = container.querySelector('h1');
    // expect(h1.innerHTML).toContain(title)
    expect( getByTestId('test-title').innerHTML ).toContain( title )
  })

  test('deve de monstrar el subtitulo enviado por props', () => { 
    const title = 'Hola, soy Goku';
    const subtitle = 'soy un subtitulo';
    const { getAllByText }= render (
      <FirstApp
        title={title}
        subtitle={subtitle}
      />
    );
    expect(getAllByText(subtitle).length).toBe(2);
   })
 })