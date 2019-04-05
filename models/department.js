module.exports = function(sequelize, DataTypes) {
    var Department = sequelize.define("Department", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    })

    Department.associate = function(models) {
        Department.hasMany(models.Machine)
    };

    Department.associate = function(models) {
        Department.belongsTo(models.Company, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Department;
}