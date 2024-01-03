import express, { Application, NextFunction, Request, Response } from "express"

import trendingRoute from "./routes/trendingRoute"
import generateTitlesRoute from "./routes/generateTitlesRoute"
const cors = require("cors")
import { rateLimit } from 'express-rate-limit'

const app: Application = express()
const port = 5000
const limiter = rateLimit({
    windowMs: 30000, // half a minute
    limit: 5, 
    standardHeaders: 'draft-7', 
    legacyHeaders: false, 
    })


app.use(cors())
app.use(limiter)
app.get("/home", (req, res, next) => {
    res.send("running")
})
app.use("/trending", trendingRoute)
app.use("/generate", generateTitlesRoute)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(503).json({ error: "Sorry something went wrong. Please try again." })
})

app.listen(port, (): void => { console.log("server is online", port) })

