export enum LearningChunkProperty {
  context = "context",
  title = "title"
}

export const learningChunkPropertyDefaults: Record<LearningChunkProperty, unknown> = {
  [LearningChunkProperty.context]: "",
  [LearningChunkProperty.title]: ""
};
