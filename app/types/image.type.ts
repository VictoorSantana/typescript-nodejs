import { BuildOptions, Model } from "sequelize";

export interface ImageAttributes {
    id: number;
    hash: string;
    type: string;
};

export interface ImageModel extends Model<ImageAttributes>, ImageAttributes {}
export type ImageStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): ImageModel;
};