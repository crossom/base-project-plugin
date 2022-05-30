/**
 * ---------------------------------------------
 * // TODO Remove this after implement the methods!
 * ---------------------------------------------
 */
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable @typescript-eslint/ban-ts-comment */

import type {
	BaseQueryOptions,
	EntityManager,
	FindConditions,
	FindOneOptions,
	FindOptions,
	Logger,
	SaveData,
	ArraySaveData,
	SingleSaveData,
} from "@thothom/core";
import { BaseRepository, ThothError } from "@thothom/core";

import type { ExtraMetadata } from "../types/extra-metadata";
import type { CountOutput } from "../types/methods-outputs/count";
import type { DeleteOutput } from "../types/methods-outputs/delete";
import type { FindOutput } from "../types/methods-outputs/find";
import type { FindOneOutput } from "../types/methods-outputs/find-one";
import type { InsertOutput } from "../types/methods-outputs/insert";
import type { PerformativeCountOutput } from "../types/methods-outputs/performative-count";
import type { RecoverOutput } from "../types/methods-outputs/recover";
import type { SaveOutput } from "../types/methods-outputs/save";
import type { SoftDeleteOutput } from "../types/methods-outputs/soft-delete";
import type { UpdateOutput } from "../types/methods-outputs/update";
import type { UpsertOutput } from "../types/methods-outputs/upsert";

export class Repository<Entity> extends BaseRepository<Entity> {
	public constructor(
		private readonly connectionInstance: any, // Replace this for the instance type of the database connection
		entityManager: EntityManager<ExtraMetadata>,
		logger: Logger,
		entity: Entity,
	) {
		super(entityManager, logger, entity);
	}

	/**
	 * ## NOT IMPLEMENTED!
	 */
	public save(
		data: SingleSaveData<Entity>,
		options?: BaseQueryOptions,
	): Promise<SaveOutput<Entity>>;
	public save(
		data: ArraySaveData<Entity>,
		options?: BaseQueryOptions,
	): Promise<SaveOutput<Array<Entity>>>;
	public save(
		_data: SaveData<Entity>,
		_options?: BaseQueryOptions,
	): Promise<SaveOutput<Array<Entity> | Entity>> {
		// Delete this after the method is implemented
		throw new ThothError({
			code: "NOT_IMPLEMENTED",
			origin: "THOTHOM",
			details: ["Method `save` is not implemented yet by this plugin"],
			message: "Method not implemented",
		});

		/*
		 * // TODO Uncomment this when method implemented
		 *
		 * const dataInDatabaseFormat = this.beforeSave({
		 * 	data: data,
		 * 	options: options,
		 * });
		 *
		 * // ...
		 *
		 * // Do Plugin Stuff Here
		 *
		 * // ...
		 *
		 *
		 * // Just an example, do not do this.
		 * const dataFromDatabase = dataInDatabaseFormat;
		 *
		 * return this.afterSave({
		 * 	data: dataFromDatabase,
		 * 	options: options,
		 * });
		 */
	}

	/**
	 * ## NOT IMPLEMENTED!
	 */
	public insert(
		data: SingleSaveData<Entity>,
		options?: BaseQueryOptions,
	): Promise<InsertOutput<Entity>>;
	public insert(
		data: ArraySaveData<Entity>,
		options?: BaseQueryOptions,
	): Promise<InsertOutput<Array<Entity>>>;
	public insert(
		_data: SaveData<Entity>,
		_options?: BaseQueryOptions,
	): Promise<InsertOutput<Array<Entity> | Entity>> {
		// Delete this after the method is implemented
		throw new ThothError({
			code: "NOT_IMPLEMENTED",
			origin: "THOTHOM",
			details: ["Method `insert` is not implemented yet by this plugin"],
			message: "Method not implemented",
		});

		/*
		 * // TODO Uncomment this when method implemented
		 *
		 * const dataInDatabaseFormat = this.beforeInsert({
		 * 	data: data,
		 * 	options: options,
		 * });
		 *
		 * // ...
		 *
		 * // Do Plugin Stuff Here
		 *
		 * // ...
		 *
		 *
		 * // Just an example, do not do this.
		 * const dataFromDatabase = dataInDatabaseFormat;
		 *
		 * return this.afterInsert({
		 * 	data: dataFromDatabase,
		 * 	options: options,
		 * });
		 */
	}

	/**
	 * ## NOT IMPLEMENTED!
	 */
	public update(
		_conditions: FindConditions<Entity>,
		_data: SingleSaveData<Entity>,
		_options?: BaseQueryOptions,
	): Promise<UpdateOutput<Entity>> {
		// Delete this after the method is implemented
		throw new ThothError({
			code: "NOT_IMPLEMENTED",
			origin: "THOTHOM",
			details: ["Method `update` is not implemented yet by this plugin"],
			message: "Method not implemented",
		});

		/*
		 * // TODO Uncomment this when method implemented
		 *
		 * const dataInDatabaseFormat = this.beforeUpdate({
		 * 	conditions: conditions,
		 * 	data: data,
		 * 	options: options,
		 * });
		 *
		 * // ...
		 *
		 * // Do Plugin Stuff Here
		 *
		 * // ...
		 *
		 *
		 * // Just an example, do not do this.
		 * const dataFromDatabase = dataInDatabaseFormat;
		 *
		 * return this.afterUpdate({
		 * 	data: dataFromDatabase,
		 * 	conditions: conditions,
		 * 	options: options,
		 * });
		 */
	}

	/**
	 * ## NOT IMPLEMENTED!
	 */
	public upsert(
		_conditions: FindConditions<Entity>,
		_data: SingleSaveData<Entity>,
		_options?: BaseQueryOptions,
	): Promise<UpsertOutput<Entity>> {
		// Delete this after the method is implemented
		throw new ThothError({
			code: "NOT_IMPLEMENTED",
			origin: "THOTHOM",
			details: ["Method `upsert` is not implemented yet by this plugin"],
			message: "Method not implemented",
		});

		/*
		 * // TODO Uncomment this when method implemented
		 *
		 * const dataInDatabaseFormat = this.beforeUpsert({
		 * 	conditions: conditions,
		 * 	data: data,
		 * 	options: options,
		 * });
		 *
		 * // ...
		 *
		 * // Do Plugin Stuff Here
		 *
		 * // ...
		 *
		 *
		 * // Just an example, do not do this.
		 * const dataFromDatabase = dataInDatabaseFormat;
		 *
		 * return this.afterUpsert({
		 * 	data: dataFromDatabase,
		 * 	conditions: conditions,
		 * 	options: options,
		 * });
		 */
	}

	/**
	 * ## NOT IMPLEMENTED!
	 */
	public find(
		_conditions: FindOptions<Entity>,
		_options?: BaseQueryOptions,
	): Promise<FindOutput<Entity>> {
		// Delete this after the method is implemented
		throw new ThothError({
			code: "NOT_IMPLEMENTED",
			origin: "THOTHOM",
			details: ["Method `find` is not implemented yet by this plugin"],
			message: "Method not implemented",
		});

		/*
		 * // TODO Uncomment this when method implemented
		 *
		 * const dataInDatabaseFormat = this.beforeFind({
		 * 	conditions: conditions,
		 * 	options: options,
		 * });
		 *
		 * // ...
		 *
		 * // Do Plugin Stuff Here
		 *
		 * // ...
		 *
		 *
		 * // Just an example, do not do this.
		 * const dataFromDatabase = dataInDatabaseFormat;
		 *
		 * return this.afterFind({
		 * 	data: dataFromDatabase,
		 * 	conditions: conditions,
		 * 	options: options,
		 * });
		 */
	}

	/**
	 * ## NOT IMPLEMENTED!
	 */
	public findOne(
		_conditions: FindOneOptions<Entity>,
		_options?: BaseQueryOptions,
	): Promise<FindOneOutput<Entity>> {
		// Delete this after the method is implemented
		throw new ThothError({
			code: "NOT_IMPLEMENTED",
			origin: "THOTHOM",
			details: ["Method `findOne` is not implemented yet by this plugin"],
			message: "Method not implemented",
		});

		/*
		 * // TODO Uncomment this when method implemented
		 *
		 * const dataInDatabaseFormat = this.beforeFindOne({
		 * 	conditions: conditions,
		 * 	options: options,
		 * });
		 *
		 * // ...
		 *
		 * // Do Plugin Stuff Here
		 *
		 * // ...
		 *
		 *
		 * // Just an example, do not do this.
		 * const dataFromDatabase = dataInDatabaseFormat;
		 *
		 * return this.afterFindOne({
		 * 	data: dataFromDatabase,
		 * 	conditions: conditions,
		 * 	options: options,
		 * });
		 */
	}

	/**
	 * ## NOT IMPLEMENTED!
	 */
	public delete(
		_where: FindConditions<Entity>,
		_options?: BaseQueryOptions,
	): Promise<DeleteOutput> {
		// Delete this after the method is implemented
		throw new ThothError({
			code: "NOT_IMPLEMENTED",
			origin: "THOTHOM",
			details: ["Method `delete` is not implemented yet by this plugin"],
			message: "Method not implemented",
		});

		/*
		 * // TODO Uncomment this when method implemented
		 *
		 * const dataInDatabaseFormat = this.beforeDelete({
		 * 	where: where,
		 * 	options: options,
		 * });
		 *
		 * // ...
		 *
		 * // Do Plugin Stuff Here
		 *
		 * // ...
		 *
		 *
		 * // Just an example, do not do this.
		 * const dataFromDatabase = dataInDatabaseFormat;
		 *
		 * return this.afterDelete({
		 * 	data: dataFromDatabase,
		 * 	where: where,
		 * 	options: options,
		 * });
		 */
	}

	/**
	 * ## NOT IMPLEMENTED!
	 */
	public softDelete(
		_where: FindConditions<Entity>,
		_options?: BaseQueryOptions,
	): Promise<SoftDeleteOutput> {
		// Delete this after the method is implemented
		throw new ThothError({
			code: "NOT_IMPLEMENTED",
			origin: "THOTHOM",
			details: ["Method `softDelete` is not implemented yet by this plugin"],
			message: "Method not implemented",
		});

		/*
		 * // TODO Uncomment this when method implemented
		 *
		 * const dataInDatabaseFormat = this.beforeSoftDelete({
		 * 	where: where,
		 * 	options: options,
		 * });
		 *
		 * // ...
		 *
		 * // Do Plugin Stuff Here
		 *
		 * // ...
		 *
		 *
		 * // Just an example, do not do this.
		 * const dataFromDatabase = dataInDatabaseFormat;
		 *
		 * return this.afterSoftDelete({
		 * 	data: dataFromDatabase,
		 * 	where: where,
		 * 	options: options,
		 * });
		 */
	}

	/**
	 * ## NOT IMPLEMENTED!
	 */
	public recover(
		_where: FindConditions<Entity>,
		_options?: BaseQueryOptions,
	): Promise<RecoverOutput> {
		// Delete this after the method is implemented
		throw new ThothError({
			code: "NOT_IMPLEMENTED",
			origin: "THOTHOM",
			details: ["Method `recover` is not implemented yet by this plugin"],
			message: "Method not implemented",
		});

		/*
		 * // TODO Uncomment this when method implemented
		 *
		 * const dataInDatabaseFormat = this.beforeRecover({
		 * 	where: where,
		 * 	options: options,
		 * });
		 *
		 * // ...
		 *
		 * // Do Plugin Stuff Here
		 *
		 * // ...
		 *
		 *
		 * // Just an example, do not do this.
		 * const dataFromDatabase = dataInDatabaseFormat;
		 *
		 * return this.afterRecover({
		 * 	data: dataFromDatabase,
		 * 	where: where,
		 * 	options: options,
		 * });
		 */
	}

	/**
	 * ## NOT IMPLEMENTED!
	 */
	public count(
		_where: FindConditions<Entity>,
		_options?: BaseQueryOptions,
	): Promise<CountOutput> {
		// Delete this after the method is implemented
		throw new ThothError({
			code: "NOT_IMPLEMENTED",
			origin: "THOTHOM",
			details: ["Method `count` is not implemented yet by this plugin"],
			message: "Method not implemented",
		});

		/*
		 * // TODO Uncomment this when method implemented
		 *
		 * const dataInDatabaseFormat = this.beforeCount({
		 * 	where: where,
		 * 	options: options,
		 * });
		 *
		 * // ...
		 *
		 * // Do Plugin Stuff Here
		 *
		 * // ...
		 *
		 *
		 * // Just an example, do not do this.
		 * const dataFromDatabase = dataInDatabaseFormat;
		 *
		 * return this.afterCount({
		 * 	data: dataFromDatabase,
		 * 	where: where,
		 * 	options: options,
		 * });
		 */
	}

	/**
	 * ## NOT IMPLEMENTED!
	 */
	public performativeCount(
		_where: FindConditions<Entity>,
		_options?: BaseQueryOptions,
	): Promise<PerformativeCountOutput> {
		// Delete this after the method is implemented
		throw new ThothError({
			code: "NOT_IMPLEMENTED",
			origin: "THOTHOM",
			details: [
				"Method `performativeCount` is not implemented yet by this plugin",
			],
			message: "Method not implemented",
		});

		/*
		 * // TODO Uncomment this when method implemented
		 *
		 * const dataInDatabaseFormat = this.beforePerformativeCount({
		 * 	where: where,
		 * 	options: options,
		 * });
		 *
		 * // ...
		 *
		 * // Do Plugin Stuff Here
		 *
		 * // ...
		 *
		 *
		 * // Just an example, do not do this.
		 * const dataFromDatabase = dataInDatabaseFormat;
		 *
		 * return this.afterPerformativeCount({
		 * 	data: dataFromDatabase,
		 * 	where: where,
		 * 	options: options,
		 * });
		 */
	}
}
