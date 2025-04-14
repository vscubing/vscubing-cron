import { createEnv } from '@t3-oss/env-core'
import { z } from 'zod'

export const env = createEnv({
  server: {
    CONTEST_CREATION_WEBHOOK_SECRET: z.string(),
    CONTEST_CREATION_WEBHOOK_URL: z.string().url(),
  },
  runtimeEnv: {
    CONTEST_CREATION_WEBHOOK_SECRET:
      process.env.CONTEST_CREATION_WEBHOOK_SECRET,
    CONTEST_CREATION_WEBHOOK_URL: process.env.CONTEST_CREATION_WEBHOOK_URL,
  },
})
