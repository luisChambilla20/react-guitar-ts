import { useEffect, useReducer } from "react";
import { FooterApp } from "./components/FooterApp";
import { HeaderApp } from "./components/HeaderApp";
import { MainApp } from "./components/MainApp";
import { cartReducer, initialState } from "./reducers/cart-reducer";

export const GuitarApp = () => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <>
      <HeaderApp cart={state.cart} dispatch={dispatch} />
      <MainApp guitar={state.data} dispatch={dispatch} />
      <FooterApp />
    </>
  );
};
