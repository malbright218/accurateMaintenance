module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8, 30]
            }
        }
    });

    User.associate = function (models) {
        User.belongsTo(models.Company, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    User.associate = function (models) {
        // Associating a User with work orders
        User.hasMany(models.WorkOrder)
    };

    return User;
}