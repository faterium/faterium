import db from "./db"
import { expect, test } from "vitest"

test("db basic select test", async () => {
	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	const url = process.env.DATABASE_URL!
	const dbCon = db(url, true)
	const users = await dbCon.selectFrom("User").selectAll().execute()
	expect(users).toBeInstanceOf(Array)
})
