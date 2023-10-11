const express = require("express");
const cors = require("cors");
// const passport = require("passport");
const authRoute = require("./routes/auth");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/auth", authRoute);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listenting on port ${port}...`));
