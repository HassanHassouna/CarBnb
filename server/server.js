const express = require("express");
const cors = require("cors");
const compression = require("compression");
const logger = require("./middleware/logger");
const bodyParser = require("body-parser");
const api = require("./routes/api");
const errorHandler = require("./middleware/error_handler");
require("dotenv").config();
const path = require("path");

const app = express();
const PORT = process.env.PORT || "8000";

app.use([logger, compression()]);
app.use(cors({ origin: "http://localhost:3000" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "..", "/client/build/")));

app.use("/", api);
app.use(errorHandler);
// app.use("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "..", "/client/build/index.html"));
// });

console.log("here:",path.join(__dirname, "..", "/client/build/index.html"));
app.listen(PORT, () => console.log(`App is Up on port ${PORT}`));
module.exports = app;
