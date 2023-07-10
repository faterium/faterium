import { procedure, router } from "../api/trpc"

export const appRouter = router({
	hello: procedure.query(() => "hello there"),
})

export type AppRouter = typeof appRouter
