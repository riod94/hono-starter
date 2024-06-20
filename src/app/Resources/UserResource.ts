import { BaseResource } from "./BaseReource";

interface UserResourceInterface {
    id: number;
    //
}

export default class UserResource extends BaseResource {
    static transform(data: any): UserResourceInterface {
        return {
            id: data?.id,
            //
        }
    }
}