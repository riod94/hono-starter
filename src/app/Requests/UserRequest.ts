import vine from "@vinejs/vine"
import { Context } from "hono"
import { validator } from "hono/validator"

export default class UserRequest {
    static schema = {
        get: vine.object({
            username: vine.string().minLength(3),
            email: vine.string().email()
        })
    }

    static parse = {
        get: (data: any, c: Context | null = null) => {
            const validator = vine.compile(this.schema.get)
            return validator.validate(data)
        }
    }

    static validate = {
        get: validator('query', (data: any, c: Context | null = null) => this.parse.get(data, c))
    }
}