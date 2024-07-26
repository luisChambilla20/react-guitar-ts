import { GuitarItem } from "./GuitarItem";
import type { Guitar } from "../types/types";
import { cartActions } from "../reducers/cart-reducer";

type GuitarListProps = {
  guitar: Guitar[];
  dispatch: React.Dispatch<cartActions>;
};

export const GuitarList = ({ guitar, dispatch }: GuitarListProps) => {
  return (
    <div className="row mt-5">
      {guitar.map((unid) => (
        <GuitarItem key={unid.id} newGuitar={unid} dispatch={dispatch} />
      ))}
    </div>
  );
};
