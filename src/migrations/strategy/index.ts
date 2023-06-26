import { RecordNode, RT } from "../../r/R";
import { createRecord, r, rtp } from "../../r";
import { getHighestStrategyVersion, strategyMigrationTree } from "./strategyMigrations";

const strategyMigrationVersions: number[] = Object.keys(strategyMigrationTree).map(numStr => parseInt(numStr)).sort((a, b) => (a - b));

/**
 * Applies migrations for "r" type and returns a new project reference
 */
export const migrateStrategy = (json: any, uptoVersion?: number): RecordNode<RT.strategy> => {
  const rjson = json as RecordNode<RT.strategy>;
  let jsonVersion = rjson?.props?.version as number ?? 0;
  if(uptoVersion === undefined) {
    uptoVersion = strategyMigrationVersions[strategyMigrationVersions.length - 1] + 1;
  }

  for(const key of strategyMigrationVersions) {
    if(jsonVersion === key && key < uptoVersion) {
      console.log(`Running r migration ${key}`);
      strategyMigrationTree[key].execute(rjson);
      jsonVersion = rjson.props.version as number;
    }
  }

  return rjson;
}

export const createNewStrategy = (): RecordNode<RT.strategy> => {
  const strategy = createRecord(RT.strategy);
  const sf = r.strategy(strategy);

  sf.set(rtp.strategy.version, getHighestStrategyVersion());
  return strategy;
}

export { getHighestStrategyVersion };
