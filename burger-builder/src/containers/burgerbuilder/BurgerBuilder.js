import React, { useState, useEffect } from "react";
import Burger from "../../components/Burger/Burger";
import { INGREDIENTS } from "../../enums/BurgerIngredient";
import BuilderControl from "../../components/builderControl/BuilderControl";
import "./BurgerBuilder.css";

function BurgerBuilder() {
  const [SelectedBurgerIngredients, setSelectedBurgerIngredients] = useState(
    []
  );
  const [BurgerTotal, setBurgerTotal] = useState(0);

  const addBurgerIngredient = (ingredient) => {
    let BurgerIngredients = [...SelectedBurgerIngredients];
    BurgerIngredients.push(ingredient);
    // aysnc here, need to use useEffect to trigger any callback stuff
    setSelectedBurgerIngredients(BurgerIngredients);
  };

  const getBurgerTotal = () => {
    let burgerTotal = 0;
    if (SelectedBurgerIngredients.length > 0) {
      SelectedBurgerIngredients.map((ingredient) => {
        burgerTotal += ingredient.price;
      });
      setBurgerTotal(burgerTotal);
    }
  };

  useEffect(() => {
    getBurgerTotal();
  }, []);

  // set a use effect to get our new total when react is done adding the new ingredient
  useEffect(() => {
    getBurgerTotal();
  }, [SelectedBurgerIngredients]);

  return (
    <div className="burgerBuilder">
      <Burger selectedBurgerIngredients={SelectedBurgerIngredients} />
      <h4>Burger Total: $ {BurgerTotal}</h4>
      {Object.entries(INGREDIENTS).map(([key, value]) => (
        <BuilderControl
          addBurgerAction={() => addBurgerIngredient(value)}
          ingredient={value}
        />
      ))}
    </div>
  );
}

export default BurgerBuilder;
