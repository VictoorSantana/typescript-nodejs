import { BuildOptions, Model } from "sequelize";

export interface CategoryAttributes {
    id: number;
    title: string;
};
export interface CategoryModel extends Model<CategoryAttributes>, CategoryAttributes {}
export type CategoryStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): CategoryModel;
};