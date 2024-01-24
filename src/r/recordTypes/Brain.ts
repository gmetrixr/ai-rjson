export enum BrainProperty {
  version = "version",
  title = "title", // title of the full context
  description = "description" // description of the full context
}

export const brainPropertyDefaults: Record<BrainProperty, unknown> = {
  [BrainProperty.version]: 0,
  [BrainProperty.title]: "",
  [BrainProperty.description]: ""
};
