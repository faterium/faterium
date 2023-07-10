import type { DB } from "../types/index"
import { Pool, neonConfig } from "@neondatabase/serverless"
import { Kysely, PostgresDialect } from "kysely"

export type FateriumDB = Kysely<DB>

export default (connectionString: string, dev: boolean) => {
	if (dev) {
		// eslint-disable-next-line @typescript-eslint/no-var-requires, @typescript-eslint/no-unsafe-assignment
		const ws = require("ws")
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		neonConfig.webSocketConstructor = ws
	}
	const pool = new Pool({ connectionString })
	const dbCon = new Kysely<DB>({ dialect: new PostgresDialect({ pool }) })
	return dbCon
}
