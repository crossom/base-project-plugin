/**
 * ---------------------------------------------
 * // TODO Remove this after implement the methods!
 * ---------------------------------------------
 */
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */

import {
	BaseQueryOptions,
	ClassType,
	EntityManager,
	FindConditions,
	FindOneOptions,
	FindOptions,
	BaseRepository,
	SymbiosisError,
	Logger,
	SaveData,
	ArraySaveData,
	SingleSaveData,
} from "@techmmunity/symbiosis";
import { ExtraMetadata } from "../types/extra-metadata";

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
	): Promise<Entity>;
	public save(
		data: ArraySaveData<Entity>,
		options?: BaseQueryOptions,
	): Promise<Array<Entity>>;
	public save(
		data: SaveData<Entity>,
		options?: BaseQueryOptions,
	): Promise<Array<Entity> | Entity> {
		// Delete this after the method is implemented
		throw new SymbiosisError({
			code: "NOT_IMPLEMENTED",
			origin: "SYMBIOSIS",
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
	): Promise<Entity>;
	public insert(
		data: ArraySaveData<Entity>,
		options?: BaseQueryOptions,
	): Promise<Array<Entity>>;
	public insert(
		data: SaveData<Entity>,
		options?: BaseQueryOptions,
	): Promise<Array<Entity> | Entity> {
		// Delete this after the method is implemented
		throw new SymbiosisError({
			code: "NOT_IMPLEMENTED",
			origin: "SYMBIOSIS",
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
		conditions: FindConditions<Entity>,
		data: SingleSaveData<Entity>,
		options?: BaseQueryOptions,
	): Promise<Array<Entity>> {
		// Delete this after the method is implemented
		throw new SymbiosisError({
			code: "NOT_IMPLEMENTED",
			origin: "SYMBIOSIS",
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
		conditions: FindConditions<Entity>,
		data: SingleSaveData<Entity>,
		options?: BaseQueryOptions,
	): Promise<Array<Entity>> {
		// Delete this after the method is implemented
		throw new SymbiosisError({
			code: "NOT_IMPLEMENTED",
			origin: "SYMBIOSIS",
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
		conditions: FindOptions<Entity>,
		options?: BaseQueryOptions,
	): Promise<Array<Entity>> {
		// Delete this after the method is implemented
		throw new SymbiosisError({
			code: "NOT_IMPLEMENTED",
			origin: "SYMBIOSIS",
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
		conditions: FindOneOptions<Entity>,
		options?: BaseQueryOptions,
	): Promise<Entity> {
		// Delete this after the method is implemented
		throw new SymbiosisError({
			code: "NOT_IMPLEMENTED",
			origin: "SYMBIOSIS",
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
		where: FindConditions<Entity>,
		options?: BaseQueryOptions,
	): Promise<number> {
		// Delete this after the method is implemented
		throw new SymbiosisError({
			code: "NOT_IMPLEMENTED",
			origin: "SYMBIOSIS",
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
		where: FindConditions<Entity>,
		options?: BaseQueryOptions,
	): Promise<number> {
		// Delete this after the method is implemented
		throw new SymbiosisError({
			code: "NOT_IMPLEMENTED",
			origin: "SYMBIOSIS",
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
		where: FindConditions<Entity>,
		options?: BaseQueryOptions,
	): Promise<number> {
		// Delete this after the method is implemented
		throw new SymbiosisError({
			code: "NOT_IMPLEMENTED",
			origin: "SYMBIOSIS",
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
		where: FindConditions<Entity>,
		options?: BaseQueryOptions,
	): Promise<number> {
		// Delete this after the method is implemented
		throw new SymbiosisError({
			code: "NOT_IMPLEMENTED",
			origin: "SYMBIOSIS",
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
		where: FindConditions<Entity>,
		options?: BaseQueryOptions,
	): Promise<number> {
		// Delete this after the method is implemented
		throw new SymbiosisError({
			code: "NOT_IMPLEMENTED",
			origin: "SYMBIOSIS",
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
