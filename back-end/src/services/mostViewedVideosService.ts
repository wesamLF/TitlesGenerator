
import puppeteer, { Page } from "puppeteer";
import axios from "axios";
const ytGamingArabic = `https://www.youtube.com/feed/trending?bp=4gIcGhpnYW1pbmdfY29ycHVzX21vc3RfcG9wdWxhcg%3D%3D`
const ytMusicArabic = `https://www.youtube.com/feed/trending?bp=4gINGgt5dG1hX2NoYXJ0cw%3D%3D`
const ytJpMovies = `https://www.youtube.com/feed/trending?bp=4gIKGgh0cmFpbGVycw%3D%3D`

type videoType = {
    title: string | null,
    channleName: string | null,
    views: string | null,
    videoLink: string | null,
    channleLink: string | null,

} | null
export async function getMostViewedVideos(tobic: string) {
    const ytThisWeekMostViews = `https://www.youtube.com/results?search_query=${tobic}&sp=CAMSAggD`
    try {
        const browser = await puppeteer.launch({
            headless: true,
        })
        const page = await browser.newPage()
        await page.goto(ytThisWeekMostViews, {
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
