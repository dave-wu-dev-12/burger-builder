import React, { useEffect } from "react";
import BurgerIngredient from "../Burger/BurgerIngredient/BurgerIngredient";
import "./Burger.css";
import { INGREDIENTS } from "../../enums/BurgerIngredient";

function Burger({ selectedBurgerIngredients }) {
  return (
    <div className="burger">
      <BurgerIngredient ingredientType={INGREDIENTS.BREAD_TOP.type} />
      {selectedBurgerIngredients.length == 0 && (
        <h4>BUILD YAH BURGER by Selecting Ingredients</h4>
      )}
      {selectedBurgerIngredients.map((ingredient, index) => (
        <BurgerIngredient ingredientType={ingredient.type} key={index} />
      ))}

      <BurgerIngredient ingredientType={INGREDIENTS.BREAD_BOTTOM.type} />
    </div>
  );
}

export default Burger;
