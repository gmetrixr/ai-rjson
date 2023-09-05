import { IOrder } from "../IOrder";
import m001_002 from "./strategy-migration-commands/m001_002_initial_migration";
import m002_003 from "./strategy-migration-commands/m002_003_adding_character";

export const strategyMigrationTree: { [key: number]: IOrder } = {
  [1]: m001_002,
  [2]: m002_003,
};

export const getHighestStrategyVersion = (): number => {
  const unorderedKeys = Object.keys(strategyMigrationTree).map(n => parseInt(n)).sort((a,b) => (b - a));
  return unorderedKeys[0] + 1;
}
