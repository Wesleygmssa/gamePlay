import React from "react";
import { useState } from "react";
import { View } from "react-native";
import { ButtonAdd } from "../../components/ButtonAdd";
import { Category } from "../../components/Category";
import { CategorySelect } from "../../components/CategorySelect";
import { Profile } from "../../components/Profile";
import { styles } from "./styles";
export function Home() {
  const [category, setCategory] = useState("");
  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  }
  return (
    <View>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>

      {/* component CategorySelect and an map */}
      <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelect}
      />
    </View>
  );
}

//Teste
