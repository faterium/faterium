/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createContext } from "../src/api/context"
import db from "../src/api/db"
import { appRouter } from "../src/router"

const { __D1_BETA__DB } = getMiniflareBindings()

export const testContext = (token?: string) => {
	// Any request will do, as long as it has a headers object
	const req = new Request("https://example.com")
	if (token) req.headers.set("authorization", `Bearer ${token}`)

	const ctx = createContext({
		env: {
			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
			DB: __D1_BETA__DB,
			JWT_SECRET: process.env.JWT_SECRET!,
		},
		req,
		resHeaders: new Headers(),
	})
	const caller = appRouter.createCaller(ctx)
	const dbCon = db(ctx.env.DB)
	return { caller, ctx, dbCon }
}
