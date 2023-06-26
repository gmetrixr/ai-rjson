export enum QueryProperty {
  query_tag = "query_tag",
  query_label = "query_label",
  query_subquery = "query_subquery",
  query_response = "query_response",
  query_response_override = "query_response_override",
}

export const queryPropertyDefaults: Record<QueryProperty, unknown> = {
  [QueryProperty.query_tag]: "",
  [QueryProperty.query_label]: "",
  [QueryProperty.query_subquery]: "",
  [QueryProperty.query_response]: "",
  [QueryProperty.query_response_override]: "",
}
