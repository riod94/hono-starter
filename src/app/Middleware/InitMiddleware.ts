import { createMiddleware } from "hono/factory";
import { dbConfig } from "../../config/database";

export default function InitMiddleware() {
    return createMiddleware(async (c, next) => {
        // const locale = c.req.header('x-localization') || 'en';
        // localStorage.setItem('locale', locale)
        const dbName = c.req.path.split('/')[1]

        if (!dbName) {
            throw new Error('Company not specified', { cause: 401 });
        }

        const knex = dbConfig(dbName)

        await next()

        // close database connection
        knex.destroy().catch((err) => {
            console.error('Database connection error', err)
        })
    })
}