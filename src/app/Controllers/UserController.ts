import { Context } from "hono"
import UserRequest from "../Requests/UserRequest";
import User from "../Models/User";
import { Mail } from "../../utils";
import { UserResource } from "../Resources";
// import { t } from "../../lang";

export default class UserController {
    static async index(c: Context) {
        // const input = await UserRequest.parse.get(c.req.query())
        const users = await User.query().select('*')

        const data = UserResource.collection(users)
        const single = UserResource.transform(users[0])
        // const data = [];

        // for (const user of users) {
        //     data.push({
        //         id: user.id,
        //         name: user.name,
        //         email: user.email
        //     })

        //     // await Mail.sendQueue(user.email, `Hello ${user.name}`, `<div>Hello ${user.name}, Welcome to Hono. </br> This email send from Hono</div>`)
        // }

        return c.json({ single: single, data: data })
    }

    static async show(c: Context) {
        // Get ID from request param
        const id = c.req.param('id')
        // Your logic here
        const data = {}

        return c.json({ data: data })
    }

    static async store(c: Context) {
        // Get data from request body
        const body = await c.req.json()
        // Your logic here
        const data = {};

        return c.json({ data: data })
    }

    static async update(c: Context) {
        // Get ID from request param
        const id = c.req.param('id')
        // Get data from Parse Request body of type multipart/form-data or application/x-www-form-urlencoded
        const body = await c.req.parseBody()
        // Your logic here
        const data = {}

        return c.json({ data: data })
    }

    static async destroy(c: Context) {
        // Get ID from request param
        const id = c.req.param('id')

        // Your logic here
        // 

        // Mengirimkan respons ke client
        return c.json({ message: 'Data deleted successfully' })
    }
}
