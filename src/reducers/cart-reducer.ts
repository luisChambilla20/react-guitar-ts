import { db } from "../db/db";
import { Cart, Guitar } from "../types/types";

export type cartActions =
  | { type: "add-cart"; payload: { newGuitar: Guitar } }
  | { type: "remove-cart"; payload: { id: Guitar["id"] } }
  | { type: "decrease-cart"; payload: { id: Guitar["id"] } }
  | { type: "reset-cart" };

export type CartState = {
  data: Guitar[];
  cart: Cart[];
};

const initialCart = (): Cart[] => {
  const localData = localStorage.getItem("cart");
  return localData ? JSON.parse(localData) : [];
};

export const initialState: CartState = {
  data: db,
  cart: initialCart(),
};

export const cartReducer = (
  state: CartState = initialState,
  action: cartActions
): CartState => {
  switch (action.type) {
    case "add-cart":
      {
        const exist = state.cart.find(
          (guitar) => guitar.id === action.payload.newGuitar.id
        );

        let updateCart: Cart[] = [];

        if (exist) {
          updateCart = state.cart.map((guitar) =>
            guitar.id === action.payload.newGuitar.id
              ? { ...guitar, quantity: guitar.quantity + 1 }
              : guitar
          );
        } else {
          const copyCart: Cart = { ...action.payload.newGuitar, quantity: 1 };
          updateCart = [...state.cart, copyCart];
        }

        return {
          ...state,
          cart: updateCart,
        };
      }
      break;

    case "decrease-cart": {
      const exist = state.cart.findIndex(
        (guitar) => guitar.id === action.payload.id
      );

      if (exist >= 0) {
        if (state.cart[exist].quantity > 1) {
          const copyCart = [...state.cart];
          copyCart[exist].quantity -= 1;
          return {
            ...state,
            cart: copyCart,
          };
        } else {
          return {
            ...state,
            cart: state.cart.filter(
              (guitar) => guitar.id !== action.payload.id
            ),
          };
        }
      }
      return state;
    }

    case "remove-cart": {
      const newCart = state.cart.filter(
        (guitar) => guitar.id !== action.payload.id
      );
      return { ...state, cart: newCart };
    }

    case "reset-cart": {
      return { ...state, cart: [] };
    }

    default:
      return state;
  }
};
