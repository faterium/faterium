import type { Context } from "./context"
import { initTRPC } from "@trpc/server"
import superjson from "superjson"

const t = initTRPC.context<Context>().create({
	transformer: superjson,
	errorFormatter(opts) {
		const { shape, error } = opts

		// Add sentry error reporting
		opts.ctx?.sentry?.captureException(error)

		return shape
	},
})

export const { middleware, router, procedure } = t
