export const getImagen = async () => {
  try {
    const apiKey = '2NzZzDh4QaF4QyYZhu8mURUeJlgla9Kv';
    const resp = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`,
    );
    const { data } = await resp.json();
    const { url } = data.images.original;

    return url;
  } catch (error) {
    // manejo del error
    console.error(error);
    return 'no se econtro la imagen';
  }
};
