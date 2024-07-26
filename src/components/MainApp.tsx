import { GuitarList } from "./GuitarList";
import type { Guitar } from "../types/types";
import { cartActions } from "../reducers/cart-reducer";

type GuitarListProps = {
  guitar: Guitar[];
  dispatch: React.Dispatch<cartActions>;
};

export const MainApp = ({ guitar, dispatch }: GuitarListProps) => {
  return (
    <main className="container-xl mt-5">
      <h2 className="text-center">Nuestra Colección</h2>

      <GuitarList guitar={guitar} dispatch={dispatch} />
    </main>
  );
};
