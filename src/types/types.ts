export type Guitar = {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
};

export type Cart = Guitar & {
  quantity: number;
};

export type CartItemProps = {
  cart: Cart[];
  handdleRemoveCard: (id: number) => void;
  handdleAddCard: (item: Cart) => void;
  handdleDecreaseCard: (id: number) => void;
};



// SELECCIONA ID Y NAME DEL TYPE GUITAR
// export type CartItem = Pick<Guitar, "id" | "name"> & {
//   quantity: number;
// };
