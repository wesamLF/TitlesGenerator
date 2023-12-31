
import { Outlet } from "react-router-dom"
import TrendingFormTools from "./components/trendingFormTools/TrendingFormTools"
import useFetchTrendingData from "./hooks/useFetchTrendingData"
import LeftSlider from "@/components/custom-comp/LeftSlider"
// import TrendingTable from "./components/trendingTableSection/trendingTable"

const TrendingContainer = () => {
  console.log("trending con render")

  const { fetchData, data, loading, error } = useFetchTrendingData()
  const newData = {
    trendingGenres: data.trendingGenres.data,
    trendingTable: data.trendingTable.data
  }

  const { trendingGenres, trendingTable } = newData
  // if (error) return "erooooooor"
  return (
    <>        
      <LeftSlider />
        
      <section className='p-0 md:px-24 md:py-16  w-full h-full '>
        <TrendingFormTools fetchData={fetchData} loading={loading} />
        <div className="my-3 h-full min-h-[450px] overflow-auto border border-solid border-[gray]  rounded-xl shadow-xl bg-white">
          <div className=" mx-auto ">
            <Outlet context={{ trendingGenres, trendingTable, loading, error }} />
            
          </div>

        </div>
      </section>
    </>
  )
}

export default TrendingContainer