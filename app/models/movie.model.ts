
import { DataTypes, Sequelize } from 'sequelize';
import { MovieStatic } from '../types/movie.type';
import conn from '../../config/connection';



export const Movie = function Factory(sequelize: Sequelize): MovieStatic {
    return <MovieStatic>sequelize.define("tb_movies", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING(40),
            allowNull: false,
        },
        stars: {
            type: DataTypes.ENUM('1','2','3','4','5'),
            allowNull: false,
            defaultValue: 1
        },
        id_category: {
            type: DataTypes.INTEGER(),
            allowNull: false,
        },
        id_image: {
            type: DataTypes.INTEGER(),
            allowNull: false,
        },
        status: {
            type: DataTypes.INTEGER(),
            allowNull: false,
            defaultValue: 0
        },
        running: {
            type: DataTypes.DATE(),
            allowNull: false,
            defaultValue: Sequelize.fn('NOW')
        },
    });
}(conn);