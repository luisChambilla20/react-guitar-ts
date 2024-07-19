import { GuitarItem } from "./GuitarItem";
import type { Guitar } from "../types/types";

type GuitarListProps = {
  guitar: Guitar[];
  handdleAddCard: (item: Guitar) => void;
};

export const GuitarList = ({ guitar, handdleAddCard }: GuitarListProps) => {
  return (
    <div className="row mt-5">
      {guitar.map((unid) => (
        <GuitarItem key={unid.id} unid={unid} handdleAddCard={handdleAddCard} />
      ))}
    </div>
  );
};
