import { Cart } from "../types/types";

type CartItemProps = {
  item: Cart;
  handdleRemoveCard: (id: number) => void;
  handdleAddCard: (item: Cart) => void;
  handdleDecreaseCard: (id: number) => void;
};

export const CartItem = ({
  item,
  handdleRemoveCard,
  handdleAddCard,
  handdleDecreaseCard,
}: CartItemProps) => {
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
          onClick={() => handdleDecreaseCard(item.id)}
          type="button"
          className="btn btn-dark"
        >
          -
        </button>
        {item.quantity}
        <button
          onClick={() => handdleAddCard(item)}
          type="button"
          className="btn btn-dark"
        >
          +
        </button>
      </td>
      <td>
        <button
          onClick={() => handdleRemoveCard(item.id)}
          className="btn btn-danger"
          type="button"
        >
          X
        </button>
      </td>
    </tr>
  );
};
