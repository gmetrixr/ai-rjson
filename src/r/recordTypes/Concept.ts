export enum ConceptProperty {
  title = "title",
  content = "content",
}

export const conceptPropertyDefaults: Record<ConceptProperty, unknown> = {
  [ConceptProperty.title]: "",
  [ConceptProperty.content]: "",
};
