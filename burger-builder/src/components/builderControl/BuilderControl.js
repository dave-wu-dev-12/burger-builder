import React from "react";

function BuilderControl({ ingredient, addBurgerAction }) {
  return (
    <div onClick={addBurgerAction}>
      <h6>
        Add - {ingredient.type} - ${ingredient.price}
      </h6>
    </div>
  );
}

export default BuilderControl;
