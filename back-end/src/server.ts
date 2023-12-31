import express, { Application } from "express"

import trendingRoute from "./routes/trendingRoute"
import generateTitlesRoute from "./routes/generateTitlesRoute"
const cors = require("cors")


const app: Application = express()
const port = 5000
app.use(cors())
app.get("/home", (req, res, next) => {
    res.send("running")
})
app.use("/trending", trendingRoute)
app.use("/generate", generateTitlesRoute)



app.listen(port, (): void => { console.log("server is online", port) })

