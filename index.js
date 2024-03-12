// import express from "express"
// import { fileURLToPath } from "url"
// import { resolve, dirname } from "path"
// const __dirname = dirname(fileURLToPath(import.meta.url))

const express = require("express")
const url = require("url")
const path = require("path")

const app = express();
app.use(express.static(path.resolve(__dirname, 'public')))

// 利用npm下載下來
app.use("/bootstrap", express.static(path.resolve(__dirname, 'node_modules/bootstrap/dist')))
app.use('/fontawesome', express.static(path.resolve(__dirname, 'node_modules/@fortawesome/fontawesome-free')));
app.use('/jquery', express.static(path.resolve(__dirname, 'node_modules/jquery/dist')));

app.get("/", (req, res) => {
    res.send("網站首頁")
})

app.listen(3000, () => {
    console.log("server running at http://localhost:3000")
})