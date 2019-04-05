module.exports = function(sequelize, DataTypes) {
    var Section = sequelize.define("Section", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        serial: {
            type: DataTypes.STRING
        }
    })

    Section.associate = function(models) {
        Section.belongsTo(models.Machine, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Section;
}