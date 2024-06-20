import { Model } from "objection";

export default class User extends Model {
    // Table name is the only required property.
    static tableName: string = 'users';

    // Each model must have a column (or a set of columns) that uniquely
    // identifies the rows. The column(s) can be specified using the 'idColumn'
    // property. 'idColumn' returns 'id' by default and doesn't need to be
    // specified unless the model's primary key is something else.
    static idColumn: string | string[] = 'id';

    // Declare columns in the table.
    declare id: number;
    declare name: string;
    declare email: string;
    declare email_verified_at: string;
    declare phone: string;
    declare password: string;
    declare remember_token: string;
    declare pin_fingerprint: string;
    declare created_at: string;
    declare updated_at: string;
}