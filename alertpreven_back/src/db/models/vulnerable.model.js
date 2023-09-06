const { DataTypes, Model, Sequelize } = require("sequelize");

const tableName = 'vulnerable';

class Vulnerable extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: tableName,
            modelName: "Vulnerable",
            timestamps: false
        };
    }
}

const VulnerableSchema = {
    idVulnerable: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        field: 'id_vulnerable'
    },
    idTypeDocument: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'id_tipo_documento'
    },
    numDocument: {
        type: DataTypes.STRING(15),
        allowNull: false,
        validate: {
            is: /^[0-9]+$/,
            min: 8
        },
        field: 'num_documento_vul'
    },
    firstName: {
        type: DataTypes.STRING(15),
        allowNull: false,
        validate: {
            is: /^[a-zA-Z\s]+$/,
        },
        field: 'primer_nombre_vul'
    },
    secondName: {
        type: DataTypes.STRING(15),
        allowNull: true,
        validate: {
            is: /^[a-zA-Z\s]+$/,
        },
        field: 'segundo_nombre_vul'
    },
    firstLastName: {
        type: DataTypes.STRING(15),
        allowNull: false,
        validate: {
            is: /^[a-zA-Z\s]+$/,
        },
        field: 'primer_apellido_vul'
    },
    secondLastName: {
        type: DataTypes.STRING(15),
        allowNull: true,
        validate: {
            is: /^[a-zA-Z\s]+$/,
        },
        field: 'segundo_apellido_vul'
    },
    birthdate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        field: 'fecha_nacimiento_vul'
    },
    genere: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isIn: {
                args: [['M','F']],
                msg: 'El género debe ser M o F'
            }
        },
        field: 'genero_vul'
    },
    urlPhoto: {
        type: DataTypes.STRING(50),
        allowNull: true,
        validate: {
            isUrl: true
        },
        field: 'url_foto_vul'
    },
    telephone: {
        type: DataTypes.STRING(15),
        allowNull: false,
        validate: {
            is: /^[0-9]+$/,
            min: 10
        },
        field: 'telefono_vul'
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: true,
        validate: {
            isEmail: true
        },
        field: 'email_vul'
    },
    direction: {
        type: DataTypes.STRING(30),
        allowNull: false,
        field: 'direccion_vul'
    },
    emergencyContact: {
        type: DataTypes.STRING(30),
        allowNull: false,
        validate: {
            is: /^[a-zA-Z\s]+$/,
        },
        field: 'contacto_emergencia_vul'
    },
    telephoneContact: {
        type: DataTypes.STRING(15),
        allowNull: false,
        validate: {
            is: /^[0-9]+$/,
            min: 10
        },
        field: 'telefono_contacto_vul'
    },
    ubication: {
        type: DataTypes.STRING(50),
        allowNull: false,
        field: 'ubicacion_geografica_vul'
    },
    necesity: {
        type: DataTypes.TEXT,
        allowNull: true,
        field: 'necesidad_vul'
    },
    medicalAllergy: {
        type: DataTypes.TEXT,
        allowNull: true,
        field: 'alergia_medica_vul'
    },
    idUser: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'id_usuario'
    }
}

module.exports = { Vulnerable, VulnerableSchema };