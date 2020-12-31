import React, { useState, useEffect } from "react";
import Burger from "../../components/Burger/Burger";
import { INGREDIENTS } from "../../enums/BurgerIngredient";
import BuilderControl from "../../components/builderControl/BuilderControl";
import "./BurgerBuilder.css";
import Modal from "../../components/modal/Modal";

function BurgerBuilder() {
  const [SelectedBurgerIngredients, setSelectedBurgerIngredients] = useState(
    []
  );
  const [BurgerTotal, setBurgerTotal] = useState(0);
  const [isCheckout, setIsCheckout] = useState(false);

  const burgerBasePrice = 5;

  const addBurgerIngredient = (ingredient) => {
    let BurgerIngredients = [...SelectedBurgerIngredients];
    BurgerIngredients.push(ingredient);
    // aysnc here, need to use useEffect to trigger any callback stuff
    setSelectedBurgerIngredients(BurgerIngredients);
  };

  const removeBurgerIngredient = (indexOfIngredient) => {
    let BurgerIngredients = [...SelectedBurgerIngredients];
    // splice the element
    BurgerIngredients.splice(indexOfIngredient, 1);
    // set the array
    setSelectedBurgerIngredients(BurgerIngredients);
  };

  const getBurgerTotal = () => {
    let burgerTotal = 0;

    if (SelectedBurgerIngredients.length > 0) {
      SelectedBurgerIngredients.map((ingredient) => {
        burgerTotal += ingredient.price;
      });
    }

    setBurgerTotal(burgerTotal + burgerBasePrice);
  };

  // set a use effect to get our new total when react is done adding the new ingredient
  useEffect(() => {
    getBurgerTotal();
  }, [SelectedBurgerIngredients]);

  return (
    <div className="burgerBuilder">
      <Burger
        selectedBurgerIngredients={SelectedBurgerIngredients}
        removeBurgerIngredient={removeBurgerIngredient}
      />

      {Object.entries(INGREDIENTS).map(([key, value]) => (
        <BuilderControl
          key={key}
          addBurgerAction={() => addBurgerIngredient(value)}
          ingredient={value}
        />
      ))}
      <h4>
        Current Burger Total:
        {SelectedBurgerIngredients.length == 0 ? (
          " $" + burgerBasePrice
        ) : (
          <div>
            {"$" + BurgerTotal}{" "}
            <div>
              <button
                onClick={() => {
                  setIsCheckout(true);
                }}
              >
                CHECKOUT
              </button>
            </div>
          </div>
        )}
      </h4>
      {isCheckout && (
        <Modal
          selectedBurgerIngredients={SelectedBurgerIngredients}
          BurgerTotal={BurgerTotal}
        />
      )}
    </div>
  );
}

export default BurgerBuilder;
