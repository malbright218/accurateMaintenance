var db = require("../models");

module.exports = function(app) {

    // app.get("/api/company", function(req, res) {
    //     var query = {};
    //     if (req.query.user_id) {
    //         query.UserId = req.query.author_id;
    //     }
    //     db.Company.findAll({
    //         where: query,
    //         include: [db.User]
    //     }).then(function(dbCompany) {
    //         res.json(dbCompany)
    //     })
    // })



   
    app.post("/api/company", function(req, res) {
        db.Company.create(req.body).then(function(data) {
            res.json(data)
        })
    })



}