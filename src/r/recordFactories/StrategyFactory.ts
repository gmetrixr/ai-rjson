import { RT, RecordNode, idAndRecord } from "../R";
import { RecordFactory } from "../R/RecordFactory";

export class StrategyFactory extends RecordFactory<RT.strategy> {
  constructor(json: RecordNode<RT.strategy>) {
    super(json);
  }

  /** given a tag, get the query response OR form input */
  getContentForTag(tag: string): idAndRecord<RT> | undefined {
    const queryEntries = this.getSortedRecordEntries(RT.query)
    for(const [qId, q] of queryEntries) {
      if(q.props.query_tag === tag) {
        return {id: qId, record: q};
      }
    }
    const formEntries = this.getSortedRecordEntries(RT.form)
    for(const [fId, f] of formEntries) {
      if(f.props.form_tag === tag) {
        return {id: fId, record: f};
      }
    }
  }

  /** get array of destination addresses for every tag */
  getReplacementMap(): Record<string, string[]> {
    const replaementMapEntries = this.getSortedRecordEntries(RT.replacement_map);
    const replacementMap: Record<string, string[]> = {};
    for(const [rmId, rm] of replaementMapEntries) {
      const tag = rm.props.source_tag;
      const destinationAddress = rm.props.destination_address;

      if(typeof tag === "string" && typeof destinationAddress === "string") {
        if(replacementMap[tag] === undefined) {
          replacementMap[tag] = []
        }
        const currentDestinationArray = replacementMap[tag];
        currentDestinationArray.push(destinationAddress);
      }

    }
    return replacementMap;
  }
}
