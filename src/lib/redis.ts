import { Redis } from '@upstash/redis'

export const redis = new Redis({
  url: 'https://us1-teaching-oryx-42559.upstash.io',
  token:  process.env.REDIS_KEY!,
})
