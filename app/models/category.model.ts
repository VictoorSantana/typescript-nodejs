
import { DataTypes, Sequelize } from 'sequelize';
import { CategoryStatic } from '../types/category.type';
import conn from '../../config/connection';



export const Category = function Factory(sequelize: Sequelize): CategoryStatic {
    return <CategoryStatic>sequelize.define("tb_category", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING(80),
            allowNull: false,
        }
    });
}(conn);