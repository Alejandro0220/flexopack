const routes = require("express").Router();

routes.post("/send", async (req, res) => {
    let service = require("../service/sendContactenos.service");
    let result = await service(req.body);
});
module.exports = routes;