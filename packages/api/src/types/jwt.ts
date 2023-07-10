import jwt from "@tsndr/cloudflare-worker-jwt"

export type SignedUser = {
	id: string
	username: string
}

export const verifyAndDecodeJWT = async (headers: Headers, jwtSecret: string, token?: string) => {
	try {
		let t = headers.get("authorization")?.replace("Bearer ", "")
		if (!t && token) t = token
		if (!t) return null
		if (await jwt.verify(t, jwtSecret)) {
			const res = jwt.decode(t || "").payload
			return { user: res as SignedUser, exp: res.exp }
		}
		return null
	} catch (e) {
		return null
	}
}
