import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import { nanoid } from 'nanoid';

const User = sequelize.define('User', {
    id: {
        type: DataTypes.STRING,
        defaultValue: () => nanoid(),
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    profileImageUrl: {
        type: DataTypes.STRING,
        allowNull: true,
    },
});

export default User;
