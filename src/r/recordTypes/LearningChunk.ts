export enum LearningChunkProperty {
    context = "context"
  }
  
  export const learningChunkPropertyDefaults:  Record<LearningChunkProperty, unknown> = {
    [LearningChunkProperty.context]: ""
  };
  