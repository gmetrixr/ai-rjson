export enum FormResponseProperty {
  autotrack_connection = "autotrack_connection",
  auto_add_new_scene_to_menu = "auto_add_new_scene_to_menu",
}

export const formResponsePropertyDefaults:  Record<FormResponseProperty, unknown> = {
  [FormResponseProperty.autotrack_connection]: false,
  [FormResponseProperty.auto_add_new_scene_to_menu]: false,
};
