
import * as z from "zod"

export const topicsArray = ["valorant", "csgo", "call of duty"]
export type topicsType = "valorant" | "csgo" | "call of duty" 
export type langType = "arabic" | "english" 
export type genreType = "gaming" | "vlogs" 


export type langAndGenreType = {
  lang: "arabic" | "english",
  genre: "gaming" | "vlogs",
}
export type langAndTopicType = {
  lang: "arabic" | "english",
  topic:"valorant" | "csgo" | "call of duty",
}


// export const generateTitlesFormSchema = z.object({
//   lang: z.enum(["english", "arabic"], {
//     required_error: "You need to select a lang type.",
//   }),
//   tobic: z.enum(tobicsArray as [string, ...string[]], {
//     required_error: "You need to select a tobic.",
//   }),
// })