import { NavLink, useOutletContext } from "react-router-dom"
import { VideoData } from "../trendingTableSection/columns"
import { Button } from "@/components/ui/button"
import LoadingSpinner from "@/utils/LoadingSpinner"
import ErrorMessage from "@/utils/ErrorMessage"

type genreType = {
  genre: string,
  description: string
}
type genresData = {
  genres: genreType[],
  trending: VideoData[]
}
const TrendingGenres = () => {
  
  const { trendingGenres, loading, error }: { trendingGenres: genresData, loading: boolean, error: boolean } = useOutletContext()
  
  if (error) return <ErrorMessage  />
  if (loading) return <div className=" my-28"><LoadingSpinner /></div>
  if (!trendingGenres?.genres) return
  return (
    <div className=" flex justify-center items-center p-10 ">
      <div className="flex flex-col gap-5 ">
        {trendingGenres?.genres?.map((g, i) => (
          <div className="" key={i}>
            <h3 className=" underline font-medium text-xl">{(i+1) +" "+ g.genre}</h3>
            <p>{g.description}</p>
          </div>
        ))}

        <Button className="">
          <NavLink to={"../table"} className="w-full">see all trending videos</NavLink>
        </Button>
      </div>

    </div>
  )
}

export default TrendingGenres