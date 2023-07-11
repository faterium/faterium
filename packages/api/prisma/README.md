# Prisma Schema

To generate the Prisma migration, run the following command:

```bash
pnpm db:migrate
```

To generate the Cloudflare D1 migration, run the following command:

```bash
npx wrangler d1 migrations create DB init -c=../../apps/workers/wrangler.toml -e dev
npx wrangler d1 migrations apply DB -c=../../apps/workers/wrangler.toml -e dev --local
```
