
import { DataTypes, Sequelize } from 'sequelize';
import { ImageStatic } from '../types/image.type';
import conn from '../../config/connection';



export const Image = function Factory(sequelize: Sequelize): ImageStatic {
    return <ImageStatic>sequelize.define("tb_images", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        hash: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        type: {
            type: DataTypes.STRING(3),
            allowNull: false,
        }
    });
}(conn);