export enum LearningChunkProperty {
  context = "context",
  title = "title", // title of the learning chunk
  description = "description" // description of the learning chunk
}

export const learningChunkPropertyDefaults: Record<LearningChunkProperty, unknown> = {
  [LearningChunkProperty.context]: "",
  [LearningChunkProperty.title]: "",
  [LearningChunkProperty.description]: ""
};
