import { BaseResource } from "./BaseReource";

interface UserResourceInterface {
    id: number;
    name: string;
    email: string;
}

export default class UserResource extends BaseResource {
    static transform(data: any): UserResourceInterface {
        return {
            id: data?.id,
            name: data?.name,
            email: data?.email
        }
    }
}