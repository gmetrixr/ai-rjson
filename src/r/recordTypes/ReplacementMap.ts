/** Stored in deployment.settings */
export enum ReplacementMapProperty {
  source_tag = "source_tag",
  destination_address = "destination_address",
}

export const replacementMapPropertyDefaults:  Record<ReplacementMapProperty, unknown> = {
  [ReplacementMapProperty.source_tag]: "",
  [ReplacementMapProperty.destination_address]: "",
};
