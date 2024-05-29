const Categories = ({ categories, filteredMenuItems }) => {
  return (
    <div className="btn-container">
      {categories.map((category) => {
        return (
          <button
            type="button"
            className="btn"
            key={category}
            onClick={() => filteredMenuItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};
export default Categories;
