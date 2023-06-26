import { createNewStrategy, getHighestStrategyVersion, migrateStrategy } from "./strategy";

const migrations = {
  createNewStrategy, getHighestStrategyVersion, migrateStrategy
}

export { migrations };
