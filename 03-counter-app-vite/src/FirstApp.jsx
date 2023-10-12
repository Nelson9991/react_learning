import PropTypes from 'prop-types';

// const newMessage = 'Nelson Marro';
// const suma = (a, b) => a + b;

export const FirstApp = ({ title, subtitle }) => {
  return (
    <>
      <h1 data-testid="test-title">{title}</h1>
      {/*<h1>{suma(5, 4)}</h1>*/}
      <p>{subtitle}</p>
      <p>{subtitle}</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

FirstApp.defaultProps = {
  // title: 'No hay titulo'
  subtitle: 'No hay subtitulo',
};
