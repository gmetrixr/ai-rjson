/** Stored in deployment.settings */
export enum StrategyProperty {
  display_name = "display_name",
  description = "description",
  template_project_uuid = "template_project_uuid",
  initial_prompt = "initial_prompt",
  thumbnail_url = "thumbnail_url",
}

export const strategyPropertyDefaults:  Record<StrategyProperty, unknown> = {
  [StrategyProperty.display_name]: "",
  [StrategyProperty.description]: "",
  [StrategyProperty.template_project_uuid]: "",
  [StrategyProperty.initial_prompt]: "",
  [StrategyProperty.thumbnail_url]: "",
};
