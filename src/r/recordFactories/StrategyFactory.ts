import { RT, RecordNode } from "../R";
import { RecordFactory } from "../R/RecordFactory";

export class StrategyFactory extends RecordFactory<RT.strategy> {
  constructor(json: RecordNode<RT.strategy>) {
    super(json);
  }

}
