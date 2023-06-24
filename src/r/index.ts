import * as R from "./R";
import { RecordNode, RecordMap, RT, RTP, rtp, createRecord, ClipboardData, idAndRecord } from "./R";
import { RecordUtils } from "./R/RecordFactory";
import { ProjectFactory } from "./recordFactories/ProjectFactory";
import * as RF from "./recordFactories";
import { ai } from "./definitions";

/**
 * Use r.record(json) for all RecordNode type objects, except the below ones
 * For project, scene, rule and element only there are overridden factories
 */
const r = {
  "record":   <T extends RT>(json: RecordNode<T>): R.RecordFactory<T> => new R.RecordFactory(json),
  // "project":  (json: RecordNode<RT.project>): RF.ProjectFactory => new RF.ProjectFactory(json),
}

const rUtils = {
  // ProjectUtils,
  RecordUtils,
}

const getFactory = (rJson: RecordNode<RT>): R.RecordFactory<RT> => {
  switch(rJson.type) {
    // case RT.project:
    //   return new RF.ProjectFactory(rJson);
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
