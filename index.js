const express = require("express");
const path = require("path");

const app = express();

app.use( "/", express.static(path.join(__dirname, "public")) );

const port = 36543;
app.listen(port, () => console.log(`listening on port ${port}...`));