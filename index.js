import express, { application } from "express";
import axios from "axios";
import bodyParser from "body-parser";
import "dotenv/config"

const app = express();
const port = 3000;
const API_KEY = process.env.API_KEY;
const API_SECRET_KEY = process.env.API_SECRET_KEY;
const API_URL = "https://api.blockchain.com/v3/exchange";

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended:true }));

const config = {
    headers: {
        'Accept': 'application/json',
        "X-API-Token": API_KEY
    },
};

// ruta principal
app.get("/", async (req, res) => {
    try {
        const result = await axios.get(API_URL + "/symbols", config);
        const content = result.data;
        res.render("index.ejs", { content: Object.entries(content) });
    } catch (error) {
        res.render("/", {error: error.message});
    }
});

// ruta buscador de cripto moneda particular
app.get("/buscar-moneda", (req, res) => {
    res.render("moneda.ejs");
});

// ruta /about
app.get("/about", (req, res) => {
    res.render("about.ejs");
})

// ruta post para consultar el precio de una criptomoneda
app.post("/get-price", async (req, res) => {
    try{
        const result = await axios.get(API_URL + "/tickers/" + req.body.informacion, config);
        res.render("moneda.ejs", { content: result.data } );
    } catch (error) {
        res.render("moneda.ejs", { error: error.message })
    }
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})