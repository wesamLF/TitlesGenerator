import { NavLink, useOutletContext } from "react-router-dom"
import { VideoData } from "../trendingTableSection/columns"
import { Button } from "@/components/ui/button"

type genreType = {
  genre: string,
  description: string
}
type genresData = {
  genres: genreType[],
  trending: VideoData[]
}
const TrendingGenres = () => {

  const { trendingGenres, loading, error }: { trendingGenres: genresData, loading: boolean, error:boolean } = useOutletContext()

  if (loading) return <h1 className=" text-red-700">loading</h1>
  if (error) return <h1 className=" text-red-700">error</h1>

  return (
    <div className=" flex justify-center items-center py-10 mx-auto">
      <div className="flex flex-col gap-5 ">
        {trendingGenres?.genres?.map((g, i) => (
          <div className="" key={i}>
            <h3 className=" underline font-medium text-xl">{g.genre}</h3>
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