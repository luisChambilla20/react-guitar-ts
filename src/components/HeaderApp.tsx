import { cartActions } from "../reducers/cart-reducer";
import { Cart } from "../types/types";
import { CartList } from "./CartList";

type HeaderAppProps = {
  cart: Cart[];
  dispatch: React.Dispatch<cartActions>;
};

export const HeaderApp = ({ cart, dispatch }: HeaderAppProps) => {
  const totalPrice = () => {
    return cart.reduce(
      (total, guitar) => total + guitar.price * guitar.quantity,
      0
    );
  };

  return (
    <header className="py-5 header">
      <div className="container-xl">
        <div className="row justify-content-center justify-content-md-between">
          <div className="col-8 col-md-3">
            <a href="index.html">
              <img
                className="img-fluid"
                src="/img/logo.svg"
                alt="imagen logo"
              />
            </a>
          </div>
          <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
            <div className="carrito">
              <img
                className="img-fluid"
                src="/img/carrito.png"
                alt="imagen carrito"
              />

              <div id="carrito" className="bg-white p-3">
                {cart.length < 1 ? (
                  <p className="text-center">El carrito esta vacio</p>
                ) : (
                  <>
                    <CartList cart={cart} dispatch={dispatch} />
                    <p className="text-end">
                      Total pagar:{" "}
                      <span className="fw-bold">${totalPrice()}</span>
                    </p>
                  </>
                )}

                <button
                  onClick={() => dispatch({ type: "reset-cart" })}
                  className="btn btn-dark w-100 mt-3 p-2"
                >
                  Vaciar Carrito
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
