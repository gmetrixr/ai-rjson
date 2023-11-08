import { StrategyProperty, strategyPropertyDefaults } from "../recordTypes/Strategy";
import { FormProperty, formPropertyDefaults } from "../recordTypes/Form";
import { ReplacementMapProperty, replacementMapPropertyDefaults } from "../recordTypes/ReplacementMap";
import { QueryProperty, queryPropertyDefaults } from "../recordTypes/Query";
import { GameProperty, gamePropertyDefaults } from "../recordTypes/Game";
import { CharacterProperty, characterPropertyDefaults } from "../recordTypes/Character";
import { LearningChunkProperty, learningChunkPropertyDefaults } from "../recordTypes/LearningChunk";
import { BrainProperty, brainPropertyDefaults } from "../recordTypes/Brain";

//https://stackoverflow.com/a/54178819/1233476
// type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
// type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

export const SINGLE_RECORD_ID = 1;

/** An enum of all RecordTypes */
export enum RT {
  "strategy" = "strategy",
  "form" = "form",
  "query" = "query",
  "replacement_map" = "replacement_map",
  "game" = "game",
  "character" = "character",
  "brain" ="brain",
  "learning_chunk" = "learning_chunk"
}

/**
 * https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates
 * Useful while trying to use the ".type" property of an "untyped" json
 */
export function isRecordType(type: string): type is RT {
  return RT[(type as RT)] !== undefined;
}

export const rtHeirarchyTree = {
  "strategy": {
    "form": {},
    "query": {},
    "replacement_map": {},
    "character": {}
  },
  "brain": {
    "learning_chunk": {
      "game": {}
    }
  }
}

/**
 * Record Type Properties Interface
 * Used to get to the enums (as a property) for typecasting
 */
export interface RTP {
  [RT.strategy]: StrategyProperty,
  [RT.form]: FormProperty,
  [RT.query]: QueryProperty,
  [RT.replacement_map]: ReplacementMapProperty,
  [RT.character]: CharacterProperty,
  
  [RT.brain]: BrainProperty,
  [RT.learning_chunk]: LearningChunkProperty,
  [RT.game]: GameProperty,
}

/**
 * Record Type Properties object
 * Used to get to the enums (as an object) to select specific properties
 */
export const rtp = {
  [RT.strategy]: StrategyProperty,
  [RT.form]: FormProperty,
  [RT.query]: QueryProperty,
  [RT.replacement_map]: ReplacementMapProperty,
  [RT.character]: CharacterProperty,
  
  [RT.brain]: BrainProperty,
  [RT.learning_chunk]: LearningChunkProperty,
  [RT.game]: GameProperty,
}

/**
 * RecordType Definitions
 * Contains all properties related to any RecordType
 */
export interface RTDefinition {
  /** Having this reference allows us to move up/down the tree to deduce parent/children record types */
  treeRef: Record<string, unknown>,
  /** If we go this type to the root, what are the other types we encounter in the heirarchy tree */
  typesInRootPath: RT[],
  defaultValues: Record<string, unknown>,
  /** Also indicates if this type uses "name". This is undefined if this type doesn't need a name */
  defaultName?: string,
}

/**
 * A map of all RecordType's Definitions
 */
export const recordTypeDefinitions: Record<RT, RTDefinition> = {
  [RT.strategy]: { 
    treeRef: rtHeirarchyTree.strategy,
    typesInRootPath: [],
    defaultValues: strategyPropertyDefaults,
    //doesn't use name, so not defining defaultName
  },
  [RT.form]: { 
    treeRef: rtHeirarchyTree.strategy.form,
    typesInRootPath: [RT.strategy],
    defaultValues: formPropertyDefaults
    //doesn't use name, so not defining defaultName
  },
  [RT.query]: { 
    treeRef: rtHeirarchyTree.strategy.query,
    typesInRootPath: [RT.strategy],
    defaultValues: queryPropertyDefaults
    //doesn't use name, so not defining defaultName
  },
  [RT.replacement_map]: { 
    treeRef: rtHeirarchyTree.strategy.replacement_map,
    typesInRootPath: [RT.strategy],
    defaultValues: replacementMapPropertyDefaults
    //doesn't use name, so not defining defaultName
  },
  [RT.character]: {
    treeRef: rtHeirarchyTree.strategy.character,
    typesInRootPath: [RT.character],
    defaultValues: characterPropertyDefaults
    //doesn't use name, so not defining defaultName
  },
  [RT.brain]: {
    treeRef: rtHeirarchyTree.brain,
    typesInRootPath: [],
    defaultValues: brainPropertyDefaults
    //doesn't use name, so not defining defaultName
  },
  [RT.learning_chunk]: {
    treeRef: rtHeirarchyTree.brain.learning_chunk,
    typesInRootPath: [RT.brain],
    defaultValues: learningChunkPropertyDefaults
    //doesn't use name, so not defining defaultName
  },
  [RT.game]: {
    treeRef: rtHeirarchyTree.brain.learning_chunk.game,
    typesInRootPath: [RT.brain,RT.learning_chunk],
    defaultValues: gamePropertyDefaults
    //doesn't use name, so not defining defaultName
  },
}

/**
 * Is the given child type somewhere under parent in the herirachy tree?
 * Not asking for immediage parent-child relation, but for any depth
 */
export function isTypeSubChildOf(parent: RT, child: RT): boolean {
  return recordTypeDefinitions[child].typesInRootPath.includes(parent);
}

/** Checking if child is an immediate child of parent in the heirarchy tree */
export function isTypeChildOf(parent: RT, child: RT): boolean {
  return Object.keys(recordTypeDefinitions[parent].treeRef).includes(child);
}

export function getTypeChildren(parent: RT): RT[] {
  return Object.keys(recordTypeDefinitions[parent].treeRef) as RT[];
}
