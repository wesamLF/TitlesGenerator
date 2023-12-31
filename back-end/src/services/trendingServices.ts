
import puppeteer, { Page } from "puppeteer";
import { config } from "dotenv"
config()
import OpenAI from "openai"
import { treningGeneresPrompt } from "../util/trending.prompst";



// const am = `https://www.nn-group.com/home.htm`
type videoType = {
    title: string | null,
    channleName: string | null,
    views: string | null,
    videoLink: string | null,
    channleLink: string | null,

} | null
export async function getTrendingVideosData(url: string) {
    try {
        const browser = await puppeteer.launch({
            headless: true,
        })
        const page = await browser.newPage()
        await page.goto(url, {
            waitUntil: "networkidle2",
        })


        // we are like in the client side with evaluate
        const videos: videoType[] = await page.evaluate(() => {
            const all = Array.from(document.querySelectorAll("ytd-video-renderer[bigger-thumbs-style='DEFAULT']"))
            const data = all.map((ele) => {
                if (ele) {
                    const title = ele!.querySelector("#video-title")?.getAttribute("title") || null
                    const videoLink = ele!.querySelector("a#thumbnail")?.getAttribute("href") || null
                    const channleName = ele!.querySelector(".yt-simple-endpoint.style-scope.yt-formatted-string")?.textContent || null
                    const channleLink = ele!.querySelector(".yt-simple-endpoint.style-scope.yt-formatted-string")?.getAttribute("href") || null
                    const views = ele!.querySelector(".inline-metadata-item.style-scope.ytd-video-meta-block")?.textContent || null
                    // if the querySelector didnt find any element the api should send null instaed
                    return { title, channleName, views, videoLink, channleLink }
                } else return null
            })


            return data
        })
        await browser.close()
        return videos

    } catch (err) {
        console.error(`Errorrrr`, err);
        return null

    }

}
export async function getTrendingTitles(url:string) {
    try {
        const browser = await puppeteer.launch({
            headless: true,
        })
        const page = await browser.newPage()
        await page.goto(url, {
            waitUntil: 'networkidle2',
            timeout: 0
        })
        const videosTitles = await page.evaluate(() => {
            const all = Array.from(document.querySelectorAll("ytd-video-renderer[bigger-thumbs-style='DEFAULT']"))
            const titles = all.map((ele) => {
                if (ele) {
                    return ele.querySelector("#video-title")?.getAttribute("title") || null
                } else return null
            })

            return titles
        })

        console.log("videosTitles", videosTitles)
        await browser.close()
        return videosTitles

    } catch (err) {
        console.error(`Errorrrr`, err);

    }

}

export async function getBestGenres(trendingTitles: string[]) {
    try {
        const openai = new OpenAI({ apiKey: process.env.OPENAI_KEY });
        const stream = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo-1106',
            messages: treningGeneresPrompt(trendingTitles),
            response_format: {
                type: "json_object"
            }


        });
        const generatedGenresArray = await JSON.parse(stream.choices[0].message.content as string)

        return generatedGenresArray?.topGenreByVideo
    } catch (err) {
        console.error(`Errorrrr`, err);
        return err 

    }

}