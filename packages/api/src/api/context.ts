import type { inferAsyncReturnType } from "@trpc/server"
import type { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch"
import type { Toucan } from "toucan-js"

export type EnvType = {
	JWT_SECRET: string
	DATABASE_URL: string
}

export function createContext(
	opts: FetchCreateContextFnOptions & { env: EnvType; sentry?: Toucan },
) {
	return {
		env: opts.env,
		sentry: opts.sentry,
		// TODO: Is it right to get the headers from the request here?
		headers: opts.req.headers,
	}
}

export type Context = inferAsyncReturnType<typeof createContext>
