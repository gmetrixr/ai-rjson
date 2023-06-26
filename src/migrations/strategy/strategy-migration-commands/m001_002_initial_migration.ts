import { RecordNode, rtp, RT } from "../../../r/R";
import { StrategyFactory } from "../../../r/recordFactories";
import { IOrder } from "../../IOrder";

class Migration implements IOrder {
  execute (strategyJson: any) {
    return migrateStrategy(strategyJson);
  }
}

const migrateStrategy = (json: any) => {
  const sf = new StrategyFactory(json as RecordNode<RT.strategy>);
  sf.set(rtp.strategy.version, 2);
  return json;
}

const migration = new Migration();
export default migration;
