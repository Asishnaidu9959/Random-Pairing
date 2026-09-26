type CategoryListProps = {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
};

function CategoryList({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryListProps) {
  return (
    <section className="category-list">
      <h3>Categories</h3>

      <button
        type="button"
        className={selectedCategory === "All" ? "active" : ""}
        onClick={() => onSelectCategory("All")}
      >
        All
      </button>

      {categories.map((category) => (
        <button
          type="button"
          key={category}
          className={selectedCategory === category ? "active" : ""}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </section>
  );
}

export default CategoryList;