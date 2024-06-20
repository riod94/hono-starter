import { Hono } from "hono";
import UserRequest from "../../app/Requests/UserRequest";
import UserController from "../../app/Controllers/UserController";
import { AuthMiddleware, InitMiddleware } from "../../app/Middleware";

const ApiRoot = new Hono().basePath("/:company/api");

ApiRoot.use(InitMiddleware(), AuthMiddleware());

ApiRoot.get('/users', UserController.index)

export default ApiRoot