import * as R from "./R";
import { RecordNode, RecordMap, RT, RTP, rtp, createRecord, ClipboardData, idAndRecord } from "./R";
import { RecordUtils } from "./R/RecordUtils";
import * as RF from "./recordFactories";
import { ai } from "./definitions";

const r = {
  "record":   <T extends RT>(json: RecordNode<T>): R.RecordFactory<T> => new R.RecordFactory(json),
  "strategy":  (json: RecordNode<RT.strategy>): RF.StrategyFactory => new RF.StrategyFactory(json),
  "brain":  (json: RecordNode<RT.brain>): RF.BrainFactory => new RF.BrainFactory(json),
}

const rUtils = {
  RecordUtils,
}

const getFactory = (rJson: RecordNode<RT>): R.RecordFactory<RT> => {
  switch(rJson.type) {
    case RT.strategy:
      return new RF.StrategyFactory(rJson);
    default:
      return new R.RecordFactory(rJson);
  }
}

export {
  R, r, RF, rUtils,
  //Exporting most used classes/types directly
  RecordNode, RecordMap, RT, RTP, rtp, createRecord, getFactory, ClipboardData, idAndRecord,
  ai
}
