import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp.jsx';

describe('Pruebas en <FirstApp/>', () => {
  // test('debe hacer match con el snapshot"', () => {
  //   const title = 'Hola, soy Nelson';
  //   const { container } = render(<FirstApp title={title} />);
  //   expect(container).toMatchSnapshot();
  // });

  test('debe mostrar el titulo en un h1', () => {
    const title = 'Hola, soy Nelson';
    const { container, getByText, getByTestId } = render(
      <FirstApp title={title} />,
    );
    expect(getByTestId('test-title').innerHTML).toBe(title);
  });

  test('debe mostrar el subtitulo en un p', () => {
    const title = 'Hola, soy Nelson';
    const subtitle = 'Soy un subtitulo';
    const { getAllByText } = render(
      <FirstApp title={title} subtitle={subtitle} />,
    );

    expect(getAllByText(subtitle).length).toBe(2);
  });
});
