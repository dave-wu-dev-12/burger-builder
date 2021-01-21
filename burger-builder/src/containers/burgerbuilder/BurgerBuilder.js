import React, { useState, useEffect } from "react";
import Burger from "../../components/Burger/Burger";
import { INGREDIENTS } from "../../enums/BurgerIngredient";
import BuilderControl from "../../components/builderControl/BuilderControl";
import "./BurgerBuilder.css";
import Modal from "../../components/modal/Modal";
import Backdrop from "../../components/backdrop/Backdrop";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function BurgerBuilder() {
  const [SelectedBurgerIngredients, setSelectedBurgerIngredients] = useState(
    []
  );
  const [BurgerTotal, setBurgerTotal] = useState(0);
  const [isCheckout, setIsCheckout] = useState(false);

  const [counter, setCounter] = useState(0);

  const dispatch = useDispatch();
  // gets and listens to the state.counter object in the reducer
  const counterRedux = useSelector((state) => state.counter);
  const counterResultsRedux = useSelector((state) => state.results);
  const burgerTotalRedux = useSelector((state) => state.burgerTotal);
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
    let burgerTotal = burgerBasePrice;

    if (SelectedBurgerIngredients.length > 0) {
      SelectedBurgerIngredients.map((ingredient) => {
        burgerTotal += ingredient.price;
      });
    }

    //setBurgerTotal(burgerTotal + burgerBasePrice);
    dispatch({ type: "update_burger_total", burgerTotal: burgerTotal });
  };

  const incrementCounter = () => {
    setTimeout(() => {
      // we pass this object to the reducer
      // containing the action we want and
      // also the data we want to pass to it
      dispatch({ type: "increment_counter", additional: 5 });
    }, 2000);
  };

  const removeResultFromList = (valueToRemove) => {
    // we pass this object to the reducer
    // containing the action we want and
    // also the data we want to pass to it
    dispatch({ type: "delete_counter_result", valueToRemove: valueToRemove });
  };

  // set a use effect to get our new total when react is done adding the new ingredient
  useEffect(() => {
    getBurgerTotal();
  }, [SelectedBurgerIngredients]);

  useEffect(() => {
    console.log(counter);
  }, [counter]);

  return (
    <div className="burgerBuilder">
      <h1>COUNTER IS : {counterRedux}</h1>
      <h1 onClick={incrementCounter}>+</h1>
      <h1>Counter results list</h1>
      <ul>
        {counterResultsRedux.map((res) => (
          <li onClick={() => removeResultFromList(res.value)} key={res.id}>
            {res.value}
          </li>
        ))}
      </ul>
      <Burger
        incrementCounter={() => incrementCounter()}
        selectedBurgerIngredients={SelectedBurgerIngredients}
        removeBurgerIngredient={removeBurgerIngredient}
      />

      {Object.entries(INGREDIENTS).map(([key, value]) => (
        <BuilderControl
          key={key}
          addBurgerAction={addBurgerIngredient}
          ingredient={value}
        />
      ))}
      <h4>
        Current Burger Total:
        {SelectedBurgerIngredients.length == 0 ? (
          " $" + burgerBasePrice
        ) : (
          <div>
            {"$" + burgerTotalRedux}{" "}
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
      <Modal
        selectedBurgerIngredients={SelectedBurgerIngredients}
        isCheckout={isCheckout}
      />
      {isCheckout && <Backdrop turnOff={() => setIsCheckout(false)} />}
    </div>
  );
}

export default BurgerBuilder;
