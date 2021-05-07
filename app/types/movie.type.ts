import { BuildOptions, Model } from "sequelize";

export interface MovieAttributes {
    id: number;
    title: string;
    description: string;
    stars: number;
    id_category: number;
    id_image: number;
    status: number;
    running: Date;
};
export interface MovieModel extends Model<MovieAttributes>, MovieAttributes {}
export type MovieStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): MovieModel;
};