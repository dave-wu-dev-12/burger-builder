import React, { useEffect } from "react";
import BurgerIngredient from "../Burger/BurgerIngredient/BurgerIngredient";
import "./Burger.css";
import { INGREDIENTS } from "../../enums/BurgerIngredient";

function Burger({ selectedBurgerIngredients, removeBurgerIngredient }) {
  return (
    <div className="burger">
      <BurgerIngredient
        ingredientType={INGREDIENTS.BREAD_TOP.type}
        isDefault="true"
      />
      {selectedBurgerIngredients.length == 0 && (
        <h4>BUILD YAH BURGER by Selecting Ingredients</h4>
      )}
      {selectedBurgerIngredients.map((ingredient, index) => (
        <BurgerIngredient
          ingredientType={ingredient.type}
          key={index}
          ingredientIndex={index}
          removeBurgerIngredient={removeBurgerIngredient}
        />
      ))}

      <BurgerIngredient
        ingredientType={INGREDIENTS.BREAD_BOTTOM.type}
        isDefault="true"
      />
    </div>
  );
}

export default Burger;
