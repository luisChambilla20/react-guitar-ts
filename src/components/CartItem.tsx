import { cartActions } from "../reducers/cart-reducer";
import { Cart } from "../types/types";

type CartItemProps = {
  item: Cart;
  dispatch: React.Dispatch<cartActions>;
};

export const CartItem = ({ item, dispatch }: CartItemProps) => {
  return (
    <tr>
      <td>
        <img
          className="img-fluid"
          src={`./img/${item.image}.jpg`}
          alt="imagen guitarra"
        />
      </td>
      <td>{item.name}</td>
      <td className="fw-bold">${item.price}</td>
      <td className="flex align-items-start gap-4">
        <button
          onClick={() =>
            dispatch({ type: "decrease-cart", payload: { id: item.id } })
          }
          type="button"
          className="btn btn-dark"
        >
          -
        </button>
        {item.quantity}
        <button
          onClick={() =>
            dispatch({ type: "add-cart", payload: { newGuitar: item } })
          }
          type="button"
          className="btn btn-dark"
        >
          +
        </button>
      </td>
      <td>
        <button
          onClick={() =>
            dispatch({ type: "remove-cart", payload: { id: item.id } })
          }
          className="btn btn-danger"
          type="button"
        >
          X
        </button>
      </td>
    </tr>
  );
};
