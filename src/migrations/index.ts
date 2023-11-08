import { createNewStrategy, getHighestStrategyVersion, migrateStrategy } from "./strategy";
import { createNewBrain, getHighestBrainVersion, migrateBrain } from "./brain";

const migrations = {
  createNewStrategy, getHighestStrategyVersion, migrateStrategy,
  createNewBrain, getHighestBrainVersion, migrateBrain
}

export { migrations };
