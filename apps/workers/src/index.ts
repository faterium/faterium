import { type EnvType, fetchRequestHandler, appRouter, createContext } from "@faterium/api/src/index"
import { Toucan } from "toucan-js"

export default {
	async fetch(request, env, context): Promise<Response> {
		// Handle Preflight Requests
		if (request.method === "OPTIONS") {
			const corsHeaders = {
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Request-Method": "*",
				"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
				"Access-Control-Allow-Headers": "*",
			}
			// Handle CORS pre-flight request.
			return new Response(null, {
				headers: corsHeaders,
				status: 204,
			})
		}
		const sentry = new Toucan({
			dsn: "https://test.ingest.sentry.io/test",
			release: "1.0.0",
			context,
			request,
		})
		let res: Response
		try {
			res = await fetchRequestHandler({
				endpoint: "/trpc",
				req: request,
				router: appRouter,
				createContext: (opts) =>
					createContext({
						...opts,
						env,
						sentry,
					}),
			})
		} catch (e) {
			sentry.captureException(e)
			res = new Response("Something went wrong! Team has been notified.", {
				status: 501,
			})
		}
		res.headers.set("Access-Control-Allow-Origin", "*")
		res.headers.set("Access-Control-Request-Method", "*")
		res.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
		res.headers.set("Access-Control-Allow-Headers", "*")
		return res
	},
} as ExportedHandler<EnvType>
