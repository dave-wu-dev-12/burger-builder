import React from "react";

function BuilderControl({ ingredient, addBurgerAction }) {
  return (
    <div onClick={() => addBurgerAction(ingredient)}>
      <h6>
        Add - {ingredient.type} - ${ingredient.price}
      </h6>
    </div>
  );
}

export default BuilderControl;
