/** Stored in deployment.settings */
export enum StrategyProperty {
  description = "description",
  project_uuid = "project_uuid",
  initial_prompt = "initial_prompt",
}

export const strategyPropertyDefaults:  Record<StrategyProperty, unknown> = {
  [StrategyProperty.description]: "",
  [StrategyProperty.project_uuid]: "",
  [StrategyProperty.initial_prompt]: "",
};
