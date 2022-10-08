import createState from "@jackcom/raphsducks";
import { DAOEvent } from "reach/sdk";

/** Global State for storing DAO stuff */
const Daos = createState({
  daos: [] as DAOEvent[]
});

export default Daos;

/** Add a `DAO` to globally-accessible state  */
export function addDAO(dao: DAOEvent) {
  const { daos } = Daos.getState();
  const newDaos = [...daos];
  const i = daos.findIndex((d) => d.contract === dao.contract);
  if (i > -1) newDaos[i] = dao;
  else newDaos.push(dao);
  Daos.multiple({ daos: newDaos });
}

/** Remove a `DAO` from globally-accessible state  */
export function removeDAO(id: string) {
  const { daos } = Daos.getState();
  const i = daos.findIndex((d) => d.contract === id);
  if (i === -1) return;
  const newDaos = [...daos];
  newDaos.splice(i, 1);
  Daos.multiple({ daos: newDaos });
}
