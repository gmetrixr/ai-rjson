export enum QueryProperty {
  menu_scene_id = "menu_scene_id",
  menu_show = "menu_show",
  menu_display_name = "menu_display_name"
}

export const queryPropertyDefaults: Record<QueryProperty, unknown> = {
  [QueryProperty.menu_scene_id]: 0,
  [QueryProperty.menu_show]: true,
  [QueryProperty.menu_display_name]: "",
}
