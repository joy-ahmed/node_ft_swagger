import express from "express";
import format from "date-format"
// const swaggerUi = require('swagger-ui-express');
import swaggerUi from "swagger-ui-express";
// const fs = require('fs')
import fs from "fs";
import YAML from "yaml";
// const YAML = require('yaml')
const file  = fs.readFileSync('./swagger.yaml', 'utf8')
const swaggerDocument = YAML.parse(file)


const app = express();
const PORT = process.env.PORT || 3000;

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));



app.get("/", (_, res) => {
  res.status(200).json({"name": "joy"});
});

app.get("/api/v1/instagram", (_, res) => {
    const instagram = {
        username : "joytoy",
        folowers: 66,
        follows: 125,
        date: format.asString("dd/MM/yyyy")
    }
    res.status(200).json(instagram);
})

app.get("/api/v1/facebook", (_, res) => {
    const facebook = {
        username : "joyahmed",
        folowers: 66,
        follows: 125,
        date: format.asString("dd/MM/yyyy", new Date())
    }
    res.status(200).json(facebook);
})

app.get("/api/v1/:token", (req,res) => {
    const token = req.params.token;
    res.status(200).json({token: token});
})


app.listen(3000, () => {
  console.log(`App is running on http://127.0.0.1:${PORT}`);
});
