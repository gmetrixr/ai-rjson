/** Stored in deployment.settings */
export enum GameProperty {
  name = "name",
  input = "input",
}

export const gamePropertyDefaults: Record<GameProperty, unknown> = {
  [GameProperty.name]: "",
  [GameProperty.input]: [],
};
