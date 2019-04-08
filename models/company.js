module.exports = function(sequelize, DataTypes) {
    var Company = sequelize.define("Company", {
        name: DataTypes.STRING,
        address: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        zip: DataTypes.STRING,
        depts: DataTypes.STRING
    });

    Company.associate = function (models) {
        Company.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    Company.associate = function(models) {
        Company.hasMany(models.Department);
    }
    return Company;
}