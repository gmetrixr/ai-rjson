export enum QueryProperty {
  query_tag = "query_tag",
  query_label = "query_label",
  query_subquery = "query_subquery"
}

export const queryPropertyDefaults: Record<QueryProperty, unknown> = {
  [QueryProperty.query_tag]: "",
  [QueryProperty.query_label]: "",
  [QueryProperty.query_subquery]: "",
}
