export enum BrainProperty {
  version = "version",
  title = "title", // title of the full context
  description = "description", // description of the full context
  topics = "topics", // all the main topics of discussion in this context
  failedTopics = "failedTopics", // all the main topics of discussion in this context
}

export const brainPropertyDefaults: Record<BrainProperty, unknown> = {
  [BrainProperty.version]: 0,
  [BrainProperty.title]: "",
  [BrainProperty.description]: "",
  [BrainProperty.topics]: [],
  [BrainProperty.failedTopics]: [],
};
