
import { DataTypes, Sequelize } from 'sequelize';
import { UserStatic } from '../types/user.type';
import conn from '../../config/connection';



export const User = function Factory(sequelize: Sequelize): UserStatic {
    return <UserStatic>sequelize.define("tb_users", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        email: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING(40),
            allowNull: false,
        },
        id_file: {
            type: DataTypes.INTEGER(),
            allowNull: true,
        },
        password: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        id_status: {
            type: DataTypes.INTEGER(),
            allowNull: true,
        },
    });
}(conn);