import { RT, RecordNode } from "../R";
import { RecordFactory } from "../R/RecordFactory";

export class BrainFactory extends RecordFactory<RT.brain> {
  constructor(json: RecordNode<RT.brain>) {
    super(json);
  }

}
