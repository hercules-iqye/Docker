const express = require('express');
const path = require("path");
const app = express()
const port = 8080;


// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
//     res.setHeader(
//       "Access-Control-Allow-Headers",
//       "X-Requested-With,content-type,Range,Authorization"
//     );
//     if (req.method === "OPTIONS") {
//       res.send();
//       return;
//     }
//     next();
//   });

  
app.use(express.static(path.join(__dirname, "public", "build")));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "public", "build", "index.html"));
    // return res.send({message: "الله يساعدك حجينا"})
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))