export enum BrainProperty {
    version = "version",
  }
  
  export const brainPropertyDefaults:  Record<BrainProperty, unknown> = {
    [BrainProperty.version]: 0,
  };