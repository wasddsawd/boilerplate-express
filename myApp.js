import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let express = import('express');
let app = express();
import dotenv from "dotenv";
dotenv.config({path: "/.env" })
app.use('/public', express.static(__dirname +'/public', ));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
});
app.get("/json", (req, res) => {
    res.json({message: process.env.MESSAGE_STYLE})
})
app.listen(3000)
































 module.exports = app;
