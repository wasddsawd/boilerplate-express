let express = require('express');
let app = express();

app.use('/public', express.static(__dirname +'/public', ));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
});
app.listen(3000)
































 module.exports = app;
