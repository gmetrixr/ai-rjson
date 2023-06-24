import { DocumentTypes } from "../definitions/ai";

export enum FormResponseProperty {
  fresponse_tag = "fresponse_tag",
  fresponse_type_selected = "fresponse_type_selected",
  fresponse_content = "fresponse_content",
}

export const formResponsePropertyDefaults:  Record<FormResponseProperty, unknown> = {
  [FormResponseProperty.fresponse_tag]: "",
  [FormResponseProperty.fresponse_type_selected]: DocumentTypes.short_text,
  [FormResponseProperty.fresponse_content]: "",
};
