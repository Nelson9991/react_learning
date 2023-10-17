import { CharacterCard, LoadingAlert } from '../03-examples';
import { useCounter, useFetch } from '../hooks';

export const Layout = () => {
  const { counter, increment } = useCounter(1);

  const { data, loading } = useFetch(
    `https://rickandmortyapi.com/api/character/${counter}`
  );

  return (
    <>
      <h1>Rick and Morty API</h1>
      <hr />

      {loading ? (
        <LoadingAlert />
      ) : (
        <CharacterCard data={data} loading={loading} increment={increment} />
      )}
    </>
  );
};
