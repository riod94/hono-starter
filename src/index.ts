import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'
import { showRoutes } from 'hono/dev'
import { trimTrailingSlash } from 'hono/trailing-slash'
import { ErrorHandler, RateLimiter } from './config'
import ApiRoot from './routes/api'

const app = new Hono()

app.use(trimTrailingSlash(), logger(), cors())

// Apply the rate limiting middleware to all requests.
app.use(RateLimiter);

app.get('/', (c) => c.json({ message: 'Hello Hono!' }))

app.route('/', ApiRoot)

app.notFound((c) => c.json({ message: '404 Not found' }))

app.onError(ErrorHandler);

showRoutes(app, { verbose: process.env.NODE_ENV === 'development' })

export default {
  port: process.env.PORT || 8989,
  fetch: app.fetch,
}