import { RecordNode, RT } from "../../r/R";
import { createRecord, r, rtp } from "../../r";
import { getHighestBrainVersion, brainMigrationTree } from "./brainMigrations";

const brainMigrationVersions: number[] = Object.keys(brainMigrationTree)
  .map(numStr => parseInt(numStr))
  .sort((a, b) => a - b);

/**
 * Applies migrations for "r" type and returns a new project reference
 */
export const migrateBrain = (json: any, uptoVersion?: number): RecordNode<RT.brain> => {
  const rjson = json as RecordNode<RT.brain>;
  let jsonVersion = (rjson?.props?.version as number) ?? 0;
  if (uptoVersion === undefined) {
    uptoVersion = brainMigrationVersions[brainMigrationVersions.length - 1] + 1;
  }

  for (const key of brainMigrationVersions) {
    if (jsonVersion === key && key < uptoVersion) {
      console.log(`Running r migration ${key}`);
      brainMigrationTree[key].execute(rjson);
      jsonVersion = rjson.props.version as number;
    }
  }

  return rjson;
};

export const createNewBrain = (): RecordNode<RT.brain> => {
  const brain = createRecord(RT.brain);
  const sf = r.brain(brain);

  sf.set(rtp.brain.version, getHighestBrainVersion());
  return brain;
};

export { getHighestBrainVersion };
