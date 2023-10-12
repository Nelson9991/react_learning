import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp.jsx';

describe('Pruebas en <FirstApp/>', () => {
  const title = 'Hola, soy Nelson';
  test('debe hacer match con el snapshot"', () => {
    const { container } = render(<FirstApp title={title} />);
    expect(container).toMatchSnapshot();
  });
});
