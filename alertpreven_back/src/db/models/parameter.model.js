const { DataTypes, Model, Sequelize } = require("sequelize");

const tableName = 'parametros_sistema';

class Parameter extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: tableName,
            modelName: "Parameter",
            timestamps: false
        };
    }
}

const ParameterSchema = {
    idParameter: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        field: 'id_parametro'
    },
    idGroupParameter: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'id_grupo_parametro'
    },
    nameParameter: {
        type: DataTypes.STRING(50),
        allowNull: false,
        field: 'nombre_parametro'
    },
    state: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isIn: {
                args: [[0,1]],
                msg: 'El estado debe ser 1 o 0'
            }
        },
        field: 'estado_parametro'
    },
    modifiedDate: {
        type: DataTypes.DATE,
        allowNull: true,
        field: 'fecha_modificacion'
    }
}

module.exports = { Parameter, ParameterSchema };