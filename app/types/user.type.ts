import { BuildOptions, Model } from "sequelize";

export interface UserAttributes {
    id: number;
    email: string;
    name: string;
    id_file: number;
    password: string;    
    id_status: number;
};
export interface UserModel extends Model<UserAttributes>, UserAttributes {}
export type UserStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): UserModel;
};