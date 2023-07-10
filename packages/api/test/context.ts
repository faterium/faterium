/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createContext } from "../src/api/context"
import db from "../src/api/db"
import { appRouter } from "../src/router"

export const testContext = (token?: string) => {
	// Any request will do, as long as it has a headers object
	const req = new Request("https://example.com")
	if (token) req.headers.set("authorization", `Bearer ${token}`)

	const ctx = createContext({
		env: {
			JWT_SECRET: process.env.JWT_SECRET!,
			DATABASE_URL: process.env.DATABASE_URL!,
		},
		req,
		resHeaders: new Headers(),
	})
	const caller = appRouter.createCaller(ctx)
	const dbCon = db(ctx.env.DATABASE_URL, true)
	return { caller, ctx, dbCon }
}
