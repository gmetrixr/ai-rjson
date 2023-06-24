export enum QueryResponseProperty {
  tour_mode_scene_id = "tour_mode_scene_id",
}

export const tourModePropertyDefaults: Record<QueryResponseProperty, unknown> = {
  [QueryResponseProperty.tour_mode_scene_id]: 0,
}
