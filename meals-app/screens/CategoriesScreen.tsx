import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";

import { CATEGORIES } from "../dummyData";

import type { ItemDataType } from "../types";

function renderCategoryItem({ item }: ItemDataType) {
  return <CategoryGridTile title={item.title} color={item.color} />;
}

function CategoriesScreen() {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
