import "reflect-metadata";

/**
 * ---------------------------------------------------------------------------
 *
 * Plugin
 *
 * ---------------------------------------------------------------------------
 */

export * from "./lib/connection";
export * from "./lib/repository";

/**
 * ---------------------------------------------------------------------------
 *
 * CLI
 *
 * ---------------------------------------------------------------------------
 */

export * from "./lib/query-runner";
export * from "./lib/sync-manager";

/**
 * ---------------------------------------------------------------------------
 *
 * Types
 *
 * ---------------------------------------------------------------------------
 */

export * from "./lib/types/connection-options";
export * from "./lib/types/column-extra-metadata";
export * from "./lib/types/entity-extra-metadata";
export * from "./lib/types/index-extra-metadata";
