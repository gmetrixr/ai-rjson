import { DocumentTypes } from "../definitions/ai";

export enum FormProperty {
  form_tag = "form_tag",
  form_label = "form_label",
  form_types_allowed = "form_types_allowed",
  form_required = "form_required",
  form_train = "form_train",
}

export const formPropertyDefaults:  Record<FormProperty, unknown> = {
  [FormProperty.form_tag]: "",
  [FormProperty.form_label]: "",
  [FormProperty.form_types_allowed]: [DocumentTypes.short_text],
  [FormProperty.form_required]: true,
  [FormProperty.form_train]: true,
};
