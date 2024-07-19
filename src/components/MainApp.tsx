import { GuitarList } from "./GuitarList";
import type { Guitar } from "../types/types";

type GuitarListProps = {
  guitar: Guitar[];
  handdleAddCard: (item: Guitar) => void;
};

export const MainApp = ({ guitar, handdleAddCard }: GuitarListProps) => {
  return (
    <main className="container-xl mt-5">
      <h2 className="text-center">Nuestra Colección</h2>

      <GuitarList guitar={guitar} handdleAddCard={handdleAddCard} />
    </main>
  );
};
