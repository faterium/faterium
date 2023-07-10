import db from "../api/db"
import { middleware } from "../api/trpc"

export const database = middleware(async ({ next, ctx }) => {
	return next({
		ctx: {
			db: db(ctx.env.DATABASE_URL, false),
		},
	})
})
