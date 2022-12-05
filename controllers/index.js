const router = require("express").Router();

const apiRoutes = require("./api");
const dashboardRoutes = require("./dashboardRoutes");
const routes = require("./homeRoutes");

router.use("/api", apiRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/", routes);

module.exports = router;