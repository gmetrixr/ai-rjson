import { RecordNode, rtp, RT } from "../../../r/R";
import { BrainFactory } from "../../../r/recordFactories";
import { IOrder } from "../../IOrder";

class Migration implements IOrder {
  execute (strategyJson: any) {
    return migrateBrain(strategyJson);
  }
}

const migrateBrain = (json: any) => {
  const sf = new BrainFactory(json as RecordNode<RT.brain>);
  sf.set(rtp.brain.version, 2);
  return json;
}

const migration = new Migration();
export default migration;
