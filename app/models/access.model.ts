
import { DataTypes, Sequelize } from 'sequelize';
import { AccessStatic } from '../types/access.type';
import conn from '../../config/connection';



export const Access = function Factory(sequelize: Sequelize): AccessStatic {
    return <AccessStatic>sequelize.define("tb_access", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        id_user: {
            type: DataTypes.INTEGER(),
            allowNull: false,
        },
        endpoint: {
            type: DataTypes.STRING(50),
            allowNull: false,
        }
    });
}(conn);