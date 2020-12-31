import React from "react";
import "./BurgerIngredient.css";

function BurgerIngredient({
  ingredientType,
  removeBurgerIngredient,
  ingredientIndex,
  isDefault,
}) {
  // run this switch statement when the component renders
  let ingredientHandler = null;
  switch (ingredientType) {
    case "bread-bottom":
      ingredientHandler = <div className="BreadBottom">1</div>;
      break;
    case "bread-top":
      ingredientHandler = (
        <div className="BreadTop">
          1<div className="Seeds1">1</div>
          <div className="Seeds2">1</div>
        </div>
      );
      break;
    case "meat":
      ingredientHandler = <div className="Meat">1</div>;
      break;
    case "cheese":
      ingredientHandler = <div className="Cheese">1</div>;
      break;
    case "salad":
      ingredientHandler = <div className="Salad">1</div>;
      break;
    case "bacon":
      ingredientHandler = <div className="Bacon">1</div>;
      break;
    default:
      ingredientHandler = "foo";
      break;
  }

  const removeAddedItem = () => {
    if (!isDefault) {
      removeBurgerIngredient(ingredientIndex);
    }
  };

  return <div onClick={removeAddedItem}>{ingredientHandler}</div>;
}

export default BurgerIngredient;
