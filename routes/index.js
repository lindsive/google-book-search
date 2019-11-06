const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// using routes defined in api folder
router.use("/api", apiRoutes);

// sending whole app if no routes are hit
router.use((req, res) => {
    res.sendFile(path.join(_dirname, "../public/index.html"));
});

// export whole router with routes
module.exports = router;