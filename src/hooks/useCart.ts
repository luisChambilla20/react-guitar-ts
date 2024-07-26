// import { useState } from "react";
// import { db } from "../db/db";
// import type { Guitar, Cart } from "../types/types";

// export const useCart = () => {
//   const initialCart = (): Cart[] => {
//     const localData = localStorage.getItem("cart");
//     return localData ? JSON.parse(localData) : [];
//   };

//   const [guitar] = useState(db);
//   const [cart, setCart] = useState(initialCart);

//   const handdleAddCard = (newGuitar: Guitar) => {
//     const exist = cart.findIndex((guitar) => guitar.id === newGuitar.id);

//     if (exist >= 0) {
//       const copyCart = [...cart];
//       copyCart[exist].quantity += 1;
//       setCart(copyCart);
//       return;
//     }

//     const copyCart: Cart = { ...newGuitar, quantity: 1 };
//     setCart([...cart, copyCart]);
//   };

//   const handdleRemoveCard = (id: Guitar["id"]) => {
//     const newCart = cart.filter((guitar) => guitar.id !== id);
//     setCart(newCart);
//   };

//   const handdleDecreaseCard = (id: Guitar["id"]) => {
//     const exist = cart.findIndex((guitar) => guitar.id === id);

//     if (exist >= 0 && cart[exist].quantity > 1) {
//       const copyCart = [...cart];
//       copyCart[exist].quantity -= 1;
//       setCart(copyCart);
//     } else {
//       handdleRemoveCard(id);
//     }
//   };

//   const handdleResetCart = () => {
//     setCart([]);
//   };

//   return {
//     cart,
//     guitar,
//     handdleAddCard,
//     handdleDecreaseCard,
//     handdleRemoveCard,
//     handdleResetCart,
//   };
// };
