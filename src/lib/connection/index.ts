import { BaseConnection } from "@techmmunity/symbiosis";

import { Repository } from "../repository";

import type { ExampleConnectionOptions } from "../types/connection-options";
import type { ExtraMetadata } from "../types/extra-metadata";
import type { CustomClass } from "@techmmunity/symbiosis/lib/entity-manager/types/metadata-type";

/**
 * Example type:
 * DynamoDBClient
 *
 * Obs: Remove this comment and this type
 */
export type LibClientType = any;

/**
 * Example type:
 * DynamoDBClientConfig
 *
 * Obs: Remove this comment and this type
 */
export type LibClientConfigType = any;

export class Connection extends BaseConnection<
	LibClientConfigType,
	ExtraMetadata
> {
	private _connectionInstance: LibClientType;

	public get connectionInstance() {
		return this._connectionInstance;
	}

	public constructor(options?: ExampleConnectionOptions) {
		// Super("your-plugin-package-name", options);
		super("base-project-symbiosis-plugin", options);
	}

	// eslint-disable-next-line require-await
	public async connect() {
		/*
		 * Example:
		 * this.connectionInstance = new DynamoDBClient(
		 * 	this.options.databaseConnectionConfig || {},
		 * );
		 */
		this._connectionInstance = {};

		return this;
	}

	// eslint-disable-next-line require-await
	public async validate() {
		// Do some basic validation
		this.basicValidate();

		// Add plugin-specific validation here
	}

	// eslint-disable-next-line require-await
	public async close() {
		/*
		 * Does something to close the connection, if needed.
		 *
		 * If the database don't require you to close the connection,
		 * you can leave this empty
		 */
	}

	public getRepository<Entity>(entity: CustomClass) {
		return new Repository<Entity>(
			this.connectionInstance,
			this.entityManager,
			this.logger,
			entity as Entity,
		);
	}
}
