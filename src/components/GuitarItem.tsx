import { cartActions } from "../reducers/cart-reducer";
import { Guitar } from "../types/types";

type GuitarItemProps = {
  newGuitar: Guitar;
  dispatch: React.Dispatch<cartActions>;
};

export const GuitarItem = ({ newGuitar, dispatch }: GuitarItemProps) => {
  const { price, name, description, image } = newGuitar;

  return (
    <div className="col-md-6 col-lg-4 my-4 row align-items-center">
      <div className="col-4">
        <img
          className="img-fluid"
          src={`./img/${image}.jpg`}
          alt="imagen guitarra"
        />
      </div>
      <div className="col-8">
        <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
        <p>{description}</p>
        <p className="fw-black text-primary fs-3">{`$${price}`}</p>
        <button
          onClick={() => {
            dispatch({ type: "add-cart", payload: { newGuitar } });
          }}
          type="button"
          className="btn btn-dark w-100"
        >
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};
