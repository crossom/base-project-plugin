/* eslint-disable sonarjs/no-duplicate-string */
import {
	BaseSyncManager,
	CreateMigrationRecordParams,
} from "@techmmunity/symbiosis-cli";
import { Connection } from "../connection";

export class SyncManager extends BaseSyncManager<Connection> {
	public createMigrationsTable(): Promise<void> {
		throw new Error("Method not implemented.");
	}

	public createMigrationRecord(_p: CreateMigrationRecordParams): Promise<void> {
		throw new Error("Method not implemented.");
	}

	public getExecutedMigrations(): Promise<Array<string>> {
		throw new Error("Method not implemented.");
	}
}
