
import { config } from "dotenv"
config()
import OpenAI from "openai"
import { titlesFromTrendingPrompt, titlesFromAiPrompt } from "../util/generateTitles.prompts";



export async function getGeneratedTitlesFromMostViewed(trendingTitles: string[]) {
    try {
        const openai = new OpenAI({ apiKey: process.env.OPENAI_KEY });
        const stream = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo-1106',
            messages: titlesFromTrendingPrompt(trendingTitles),
            response_format: {
                type: "json_object"
            }


        });
        const generateTitlesArray = await JSON.parse(stream.choices[0].message.content as string)

        return generateTitlesArray.titles 
    } catch (err) {
        console.error(`Errorrrr`, err);
        return err 

    }

}
export async function getGeneratedTitlesFromAI(tobic:string) {
    try {
        const openai = new OpenAI({ apiKey: process.env.OPENAI_KEY });
        const stream = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo-1106',
            messages: titlesFromAiPrompt(tobic),
            response_format: {
                type: "json_object"
            }


        });
        const generatedGenresArray = await JSON.parse(stream.choices[0].message.content as string)

        return generatedGenresArray.titles
    } catch (err) {
        console.error(`Errorrrr`, err);
        return err 

    }

}

