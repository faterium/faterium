import type { DB } from "../types/index"
import { D1Dialect } from "kysely-d1"
import { Kysely } from "kysely"

export type FateriumDB = Kysely<DB>

export default (database: D1Database) => {
	console.log(database)
	database.exec("SELECT * FROM \"User\"").then(console.log)
	const dbCon = new Kysely<DB>({ dialect: new D1Dialect({ database }) })
	return dbCon
}
