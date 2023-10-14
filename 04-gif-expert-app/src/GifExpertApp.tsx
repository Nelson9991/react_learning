import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

function GifExpertApp() {
  const [categories, setCategories] = useState(['One Punch']);

  const handleAddCategory = (newCategory: string) => {
    if (categories.includes(newCategory)) return;
    setCategories((categories) => [newCategory, ...categories]);
  };

  return (
    <>
      <h1>Gif Expert App</h1>
      <AddCategory onNewCategory={handleAddCategory} />

      {categories.map((cat) => (
        <GifGrid key={cat} category={cat} />
      ))}
    </>
  );
}

export default GifExpertApp;
