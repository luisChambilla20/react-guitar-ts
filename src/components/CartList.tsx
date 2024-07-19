import { CartItem } from "./CartItem";
import { Cart, CartItemProps } from "../types/types";

export const CartList = ({
  cart,
  handdleRemoveCard,
  handdleAddCard,
  handdleDecreaseCard,
}: CartItemProps) => {
  return (
    <>
      <table className="w-100 table">
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {cart.map((item: Cart) => (
            <CartItem
              key={item.id}
              item={item}
              handdleRemoveCard={handdleRemoveCard}
              handdleAddCard={handdleAddCard}
              handdleDecreaseCard={handdleDecreaseCard}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};
