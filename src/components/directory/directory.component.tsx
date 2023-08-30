import { CategoryItemType } from "../../types";
import CategoryItem from "../category-item/category-item.component";
import "./directory.styles.scss";

const Directory = ({ categories }: { categories: CategoryItemType[] }) => {
  return (
    <div className="directory-container">
      {categories.map((category: CategoryItemType) => (
        <CategoryItem
          imageUrl={category.imageUrl}
          title={category.title}
          key={category.id}
        />
      ))}
    </div>
  );
};

export default Directory;
