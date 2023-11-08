import { IOrder } from "../IOrder";
import m001_002 from "./brain-migration-commands/m001_002_initial_migration";

export const brainMigrationTree: { [key: number]: IOrder } = {
  [1]: m001_002
};

export const getHighestBrainVersion = (): number => {
  const unorderedKeys = Object.keys(brainMigrationTree).map(n => parseInt(n)).sort((a,b) => (b - a));
  return unorderedKeys[0] + 1;
}
