export type CategoryItemType = { id: number; title: string; imageUrl: string };

export type DirectoryType = {
  categories: CategoryItemType[];
};

export type NoIdCategoryItemType = Omit<CategoryItemType, "id">;
