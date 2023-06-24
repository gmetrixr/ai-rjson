export enum FormProperty {
  webhook_enabled = "webhook_enabled",
  webhook_type = "webhook_type", //rules | session | variables | legacy (for the older version of webhooks)
  webhook_auth_type = "webhook_auth_type", //none, basic, jwt
  webhook_api_endpoint = "webhook_api_endpoint",
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization
  webhook_auth_basic_credentials = "webhook_auth_basic_credentials",
  webhook_auth_jwt_secret = "webhook_auth_jwt_secret",
}

export const formPropertyDefaults:  Record<FormProperty, unknown> = {
  [FormProperty.webhook_enabled]: false,
  [FormProperty.webhook_type]: "variables", //Definitions.WebhookType.variables
  [FormProperty.webhook_auth_type]: "none", //Definitions.WebhookAuthType.none
  [FormProperty.webhook_api_endpoint]: "",
  [FormProperty.webhook_auth_basic_credentials]: "",
  [FormProperty.webhook_auth_jwt_secret]: "",
};
