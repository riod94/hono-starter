import vine from "@vinejs/vine"
import { Context } from "hono"
import { validator } from "hono/validator"

export default class TestRequest {
    // Add validation rules
    static schema = {
        get: vine.object({
            // Get validation rules
        }),
        post: vine.object({
            // Post validation rules
        }),
    }

    // Parse request data
    static parse = {
        get: (data: any, c: Context | null = null) => {
            const validator = vine.compile(this.schema.get)
            return validator.validate(data)
        },
        post: (data: any, c: Context | null = null) => {
            const validator = vine.compile(this.schema.post)
            return validator.validate(data)
        }
    }

    // Validate request data
    // validator types : cookie, header, query, param, form, json
    static validate = {
        get: validator('query', (data: any, c: Context | null = null) => this.parse.get(data, c)),
        post: validator('json', (data: any, c: Context | null = null) => this.parse.post(data, c))
    }
}