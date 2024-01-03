
import { Outlet } from "react-router-dom"
import TrendingFormTools from "./components/trendingFormTools/TrendingFormTools"
import useFetchTrendingData from "./hooks/useFetchTrendingData"
import LeftSlider from "@/components/custom-comp/LeftSlider"
// import TrendingTable from "./components/trendingTableSection/trendingTable"
const TrendingContainer = () => {

  const { fetchData, data, loading, error } = useFetchTrendingData()
  const newData = {
    trendingGenres: data.trendingGenres.data,
    trendingTable: data.trendingTable.data
  }

  const { trendingGenres, trendingTable } = newData
  // if (error) return "erooooooor"
  console.log("trending con render")

  return (
    <>
      <LeftSlider />

      <section className='p-0 md:px-24 md:py-16  w-full'>
        <TrendingFormTools fetchData={fetchData} loading={loading} />
        <div className="my-3  min-h-[450px] border border-solid border-[gray]  shadow-md shadow-gray-500 bg-white">
            <Outlet context={{ trendingGenres, trendingTable, loading, error }} />



        </div>
      </section>
    </>
  )
}

export default TrendingContainer