import React, { useEffect } from "react";
import "./modal.css";

function Modal({ selectedBurgerIngredients, BurgerTotal }) {
  // no need to run useeffect here since children are re-rendered by parent state change
  // and we will get all the updated items
  let ingredientList = [];
  console.log("ingredients");
  // get ingredient totals
  let ingredientCount = new Map();
  selectedBurgerIngredients.map((ingredient) => {
    if (ingredientCount.has(ingredient.type)) {
      let currentCount = ingredientCount.get(ingredient.type);
      ingredientCount.set(ingredient.type, currentCount + 1);
    } else {
      ingredientCount.set(ingredient.type, 1);
    }
  });

  // render the list
  ingredientCount.forEach((value, key) => {
    ingredientList.push(
      <div key={key}>
        {key} x {value}
      </div>
    );
  });

  return (
    <div className="summaryModal">
      <h4>Your Burger Order</h4>
      <h6>Wow that is a delcious burger you have created</h6>
      {ingredientList.length > 0 && ingredientList}
      <h4>Grand Total $ {BurgerTotal}</h4>
      <button>Would you like to proceed?</button>
    </div>
  );
}

export default Modal;
