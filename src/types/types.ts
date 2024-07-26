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



// SELECCIONA ID Y NAME DEL TYPE GUITAR
// export type CartItem = Pick<Guitar, "id" | "name"> & {
//   quantity: number;
// };
