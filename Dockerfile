FROM oven/bun:slim

WORKDIR /app

COPY . .

RUN bun install --no-save --frozen-lockfile
RUN bun run lib/env.ts # validate env variables

EXPOSE 3000

CMD ["bun", "run", "index.ts"]
