import { middleware } from "../api/trpc"
import { verifyAndDecodeJWT } from "../types/jwt"
import { TRPCError } from "@trpc/server"

export const auth = middleware(async ({ next, ctx }) => {
	const res = await verifyAndDecodeJWT(ctx.headers, ctx.env.JWT_SECRET)
	if (!res) throw new TRPCError({ code: "UNAUTHORIZED" })
	return next({
		ctx: {
			signedUser: res.user,
			authTokenExpiration: res.exp,
		},
	})
})
