import { BuildOptions, Model } from "sequelize";

export interface AccessAttributes {
    id: number;
    id_user: number;
    endpoint: string;
};

export interface AccessModel extends Model<AccessAttributes>, AccessAttributes {}
export type AccessStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): AccessModel;
};