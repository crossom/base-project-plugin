import { BaseConnectionOptions, Connection } from "@techmmunity/symbiosis";
import type { CustomClass } from "@techmmunity/symbiosis/lib/entity-manager/types/metadata-type";
import { ExampleRepository } from "../repository";
import type { ColumnExtraMetadata } from "../types/column-extra-metadata";
import type { EntityExtraMetadata } from "../types/entity-extra-metadata";

/**
 * Example type:
 * DynamoDBClientConfig
 */
export type LibToConnectToDbOptionsType = any;

export class ExampleConnection extends Connection<
	EntityExtraMetadata,
	ColumnExtraMetadata
> {
	private readonly connectionInstance: LibToConnectToDbOptionsType;

	public constructor(
		options: BaseConnectionOptions<LibToConnectToDbOptionsType>,
	) {
		super(options);

		this.connectionInstance = {};
		/*
		 * Example:
		 * this.connectionInstance = new DynamoDBClient(
		 * 	options.databaseConnectionConfig || {},
		 * );
		 */
	}

	public getRepository<Entity>(entity: CustomClass) {
		return new ExampleRepository(
			this.connectionInstance,
			this.entityManager,
			entity as Entity,
		);
	}
}
