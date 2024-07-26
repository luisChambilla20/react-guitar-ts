import { CartItem } from "./CartItem";
import { Cart } from "../types/types";
import { cartActions } from "../reducers/cart-reducer";

type CartListProps = {
  cart: Cart[];
  dispatch: React.Dispatch<cartActions>;
};

export const CartList = ({ cart, dispatch }: CartListProps) => {
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
            <CartItem key={item.id} item={item} dispatch={dispatch} />
          ))}
        </tbody>
      </table>
    </>
  );
};
