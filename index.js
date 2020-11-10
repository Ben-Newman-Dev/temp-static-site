const express = require("express");
const port = 3000;
const app = express();
const favicon = require('serve-favicon');

app.use("./public/favicon.ico");
app.use(express.static('./public'));

app.listen(port, () => console.log(`Listening on port ${port}`))