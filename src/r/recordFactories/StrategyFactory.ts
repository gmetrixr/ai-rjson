import { RT, RecordNode, idAndRecord } from "../R";
import { RecordFactory } from "../R/RecordFactory";

export class StrategyFactory extends RecordFactory<RT.strategy> {
  constructor(json: RecordNode<RT.strategy>) {
    super(json);
  }

  //given a tag, get the query response OR form input
  getValueForTag(tag: string): idAndRecord<RT> | undefined {
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
}
