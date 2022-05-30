import type { BaseConnectionOptions } from "@thothom/core";

/**
 * Example type:
 * DynamoDBClientOptions
 *
 * Obs: Remove this comment and this type
 */
export type DatabaseConfigType = any;

export type ExampleConnectionOptions = Omit<
	BaseConnectionOptions<DatabaseConfigType>,
	"plugin"
>;
