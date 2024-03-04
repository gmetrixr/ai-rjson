export enum ConceptProperty {
  title = "title",
  content = "content",
  relevance_score = "relevance_score",
}

export const conceptPropertyDefaults: Record<ConceptProperty, unknown> = {
  [ConceptProperty.title]: "",
  [ConceptProperty.content]: "",
  [ConceptProperty.relevance_score]: 0,
};
