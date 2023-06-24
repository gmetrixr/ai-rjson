export enum QueryResponseProperty {
  qresponse_tag = "qresponse_tag",
  qresponse_content = "qresponse_content",
  qresponse_override = "qresponse_override",
}

export const queryResponsePropertyDefaults: Record<QueryResponseProperty, unknown> = {
  [QueryResponseProperty.qresponse_tag]: "",
  [QueryResponseProperty.qresponse_content]: "",
  [QueryResponseProperty.qresponse_override]: "",
}
