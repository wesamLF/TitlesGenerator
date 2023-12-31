import { useState } from "react"
import axios from "axios"


export default function useFetchTrendingData() {

    const [data, setData] = useState({

        trendingGenres: {
            genre: "",
            data: []
        },
        trendingTable: {
            genre: "",
            data: []
        }
    })
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    console.log("data form trenidningggggg hooks", data)
    const fetchData = (url: string, to: string, genre: string) => {
        if (to == "genres" && data.trendingGenres.data.length == 0 || to == "ai" && genre != data.trendingGenres.genre) {
            console.log("tooooo", to)

            setLoading(true)
            axios.get(url).then(res => {
                setLoading(false);
                setData({
                    trendingGenres: {
                        genre: genre,
                        data: res.data as any
                    },
                    trendingTable: {...data.trendingTable}
                })
            }).catch(() => {
                setError(true)
                setLoading(false)
            })
        } else if (to == "table" && data.trendingTable.data.length == 0 || to == "mostviewed" && genre != data.trendingTable.genre) {
            setLoading(true)
            axios.get(url).then(res => {
                setLoading(false);
                setData({
                    trendingTable: {
                        genre: genre,
                        data: res.data as any
                    },
                    trendingGenres: {...data.trendingGenres}
                })
            }).catch(() => {
                setError(true)
                setLoading(false)
            })
        }
    };

    return { fetchData, data, loading, error }

}
