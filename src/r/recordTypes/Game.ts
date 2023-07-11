/** Stored in deployment.settings */
export enum GameProperty {
  name = "name",
  source_tag = "source_tag",
  destination_address = "destination_address",
}

export const gamePropertyDefaults:  Record<GameProperty, unknown> = {
  [GameProperty.name]: "",
  [GameProperty.source_tag]: "",
  [GameProperty.destination_address]: "",
};
