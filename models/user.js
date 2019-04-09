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
            type: DataTypes.TEXT,
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
        // Associating a User with a company
        User.hasMany(models.Company)
    };
    

    // User.associate = function (models) {
    //     // Associating a User with work orders
    //     User.hasMany(models.WorkOrder)
    // };

    return User;
}