/** Stored in deployment.settings */
export enum StrategyProperty {
  template_project_uuid = "template_project_uuid",
  initial_prompt = "initial_prompt",
  thumbnail_url = "thumbnail_url",
  version = "version",
}

export const strategyPropertyDefaults:  Record<StrategyProperty, unknown> = {
  [StrategyProperty.template_project_uuid]: "",
  [StrategyProperty.initial_prompt]: "",
  [StrategyProperty.thumbnail_url]: "",
  [StrategyProperty.version]: 0,
};
