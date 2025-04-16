import { CronJob } from 'cron'
import { env } from './lib/env'
import { tryCatch } from './lib/try-catch'

const name = 'publishScheduledContest'
const cronTime = '0 22 * * *'
const timeZone = 'Europe/Berlin'
CronJob.from({
  cronTime,
  onTick: async () => {
    console.log(`Running ${name} tick`)
    const { data, error } = await tryCatch(
      fetch(env.CONTEST_CREATION_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${env.CONTEST_CREATION_WEBHOOK_SECRET}`,
        },
      }),
    )
    if (error) console.error(error.message)
    else console.log(await data.text())
    console.log('\n')
  },
  start: true,
  timeZone,
})
console.log(`Cron job ${name} (${cronTime}, ${timeZone}) started\n`)
