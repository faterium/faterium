import { testContext } from "./context"
import { expect, test } from "vitest"

test("db basic test", async () => {
	const { dbCon } = testContext()
	// const users = await dbCon.selectFrom("User").selectAll().execute()
	// expect(users).toBeInstanceOf(Array)
})
