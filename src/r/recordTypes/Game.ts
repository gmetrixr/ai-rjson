/** Stored in deployment.settings */
export enum GameProperty {
  name = "name",
  input = "input",
  input_required = "input_required",
  category = "category",
}

export const gamePropertyDefaults: Record<GameProperty, unknown> = {
  [GameProperty.name]: "",
  [GameProperty.input]: [],
  [GameProperty.input_required]: undefined,
  [GameProperty.category]: undefined,
};
