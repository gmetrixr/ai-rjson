/** Stored in deployment.settings */
export enum CharacterProperty {
  source_tag = "source_tag",
  destination_address = "destination_address",
  voice_option = "voice_option",
  language = "language",
  welcome_dialogue = "welcome_dialogue"
}

export const characterPropertyDefaults:  Record<CharacterProperty, unknown> = {
  [CharacterProperty.source_tag]: "",
  [CharacterProperty.destination_address]: "",
  [CharacterProperty.voice_option]: "en-US-Wavenet-A",
  [CharacterProperty.language]: "en-US",
  [CharacterProperty.welcome_dialogue]: "",
};
