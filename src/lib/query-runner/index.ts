/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable require-await */

import {
	BaseQueryRunner,
	CreateColumnParams,
	CreateIndexParams,
	CreateTableParams,
} from "@techmmunity/symbiosis-cli";
import { Connection } from "../connection";

export class QueryRunner extends BaseQueryRunner<Connection> {
	public constructor(connection: Connection) {
		super(connection);
	}

	public async createTable(p: CreateTableParams) {
		throw new Error("Method not implemented.");
	}

	public async createIndex(p: CreateIndexParams) {
		throw new Error("Method not implemented.");
	}

	public async createColumn(p: CreateColumnParams) {
		throw new Error("Method not implemented.");
	}
}
