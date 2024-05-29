import { useState } from 'react';
import menu from './data';
import Title from '../Title';
import Menu from './Menu';
import Categories from './Categories';

// const tempCategories = menu.map((menuItem) => menuItem.category);
// const tempSetCategories = new Set(tempCategories);
// const allTempCategories = ['all', ...tempSetCategories];
// console.log(allTempCategories);

const allCategories = [
  'all',
  ...new Set(menu.map((menuItem) => menuItem.category)),
];

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);

  const filteredMenuItems = (category) => {
    if (category === 'all') {
      setMenuItems(menu);
      return;
    }
    const newMenuItems = menu.filter(
      (menuItem) => menuItem.category === category
    );
    setMenuItems(newMenuItems);
  };

  return (
    <main>
      <section className="menu">
        <Title title="our menu" />
        <Categories
          categories={categories}
          filteredMenuItems={filteredMenuItems}
        />
        <Menu menuItems={menuItems} />
      </section>
    </main>
  );
};
export default App;
