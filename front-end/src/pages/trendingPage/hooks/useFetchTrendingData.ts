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
    const fetchData = (url: string, to: "table" | "genres", genre: string) => {
        setError(false)
        setLoading(true)
        if (to == "genres" && data.trendingGenres.data.length == 0 || to == "genres" && genre != data.trendingGenres.genre) {
            
            axios.get(url).then(res => {
                setLoading(false);
                setData({
                    trendingGenres: {
                        genre: genre,
                        data: res.data
                    },
                    trendingTable: {...data.trendingTable}
                })
            }).catch(() => {
                setError(true)
                setLoading(false)
            })
        } else if (to == "table" && data.trendingTable.data.length == 0 || to == "table" && genre != data.trendingTable.genre) {
            axios.get(url).then(res => {
                setLoading(false);
                setData({
                    trendingTable: {
                        genre: genre,
                        data: res.data
                    },
                    trendingGenres: {...data.trendingGenres}
                })
            }).catch(() => {
                setError(true)
                setLoading(false)
            })
        }else{setLoading(false)}
    };

    return { fetchData, data, loading, error }

}
