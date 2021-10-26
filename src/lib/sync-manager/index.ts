import { BaseSyncManager } from "@techmmunity/symbiosis-cli";
import { Connection } from "../connection";

export class SyncManager extends BaseSyncManager<Connection> {
	public constructor(connection: Connection) {
		super(connection);
	}

	// eslint-disable-next-line require-await
	public async getExecutedMigrations() {
		return [""];
	}
}
