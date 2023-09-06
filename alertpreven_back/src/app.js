const dotenv = require("dotenv");
const express = require('express');
const routerApi = require("./routes");

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(express.json());

routerApi(app);

app.listen(port, () => {
    console.log(`App in port ${port}`);
})