
import { Request, Response, NextFunction } from "express"

import { getBestGenres, getTrendingTitles, getTrendingVideosData } from "../services/trendingServices"
import { getMostViewedVideos } from "../services/mostViewedVideosService"
import { urlsFilter } from "../util/urlsFilter"

const trenidngNOW = `https://www.youtube.com/feed/trending?gl=US&app=desktop`
const trenidngGaming = `https://www.youtube.com/feed/trending?bp=4gIcGhpnYW1pbmdfY29ycHVzX21vc3RfcG9wdWxhcg%3D%3D`
const trenidngMovies = `https://www.youtube.com/feed/trending?bp=4gIKGgh0cmFpbGVycw%3D%3D`
const trenidngMusic = `https://www.youtube.com/feed/trending?bp=4gINGgt5dG1hX2NoYXJ0cw%3D%3D`

type generateGenreType = {
    genre: string
    description: string
}

export async function trendingTitlesController(req: Request, res: Response, next: NextFunction) {
    try {
        const url = urlsFilter(req.params?.genre || "now")
        const data = await getTrendingTitles(url)
        res.status(200)
        res.json(data)
    } catch (err) {
        res.status(500)
        res.json(err)
    }

}
export async function trendingVideosController(req: Request, res: Response, next: NextFunction) {
    try {
        const url = urlsFilter(req.params?.genre)

        const data = await getTrendingVideosData(url)
        const fullData = {
            trending:data,
        } 
        res.status(200)
        res.json(fullData)
    } catch (err) {
        res.status(500)
        res.json(err)
    }

}
export async function trendingGenresControoler(req: Request, res: Response, next: NextFunction) {
    try {
        const url = urlsFilter(req.params?.genre)
        const temp = await getTrendingVideosData(url)
        let titles: (string | null)[]
        if (temp) {
            titles = temp.map((title) => title!.title)
        } else { titles = [""] }

        const generatedGenres:generateGenreType[] = await getBestGenres(titles as string[])
        const fullData = {
            trending:temp,
            genres:generatedGenres
        }        
        res.json(fullData)
    } catch (err) {
        res.status(500)
        res.json(err)
    }

}