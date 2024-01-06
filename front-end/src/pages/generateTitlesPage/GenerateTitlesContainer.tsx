

import useFetchGenerateTitlesData from "./hooks/useFetchGenerateTitlesData"
import GenerateTitlesFormTools from "./components/generateTitlesFormTools/GenerateTitlesFormTools"
import { Outlet } from "react-router-dom"
import LeftSlider from "@/components/custom-comp/LeftSlider"


const GenerateTitlesContainer = () => {
    const { fetchData, data, loading, error } = useFetchGenerateTitlesData()
    console.log("generate con render", data)
    const newData = {
        fromMostViewed: data.fromMostViewed.data,
        fromAi: data.fromAi.data
    }
    const { fromMostViewed, fromAi } = newData
    console.log("gnew data", newData)

    return (
        <>
            <LeftSlider />

            <section className='p-0 md:px-24 md:py-16  w-full h-full'>
                <GenerateTitlesFormTools fetchData={fetchData} loading={loading} />
                <div className="my-3 h-full min-h-[450px] overflow-auto border border-solid border-[gray] shadow-md shadow-gray-500 bg-white">
                    <div className="">
                        {/* context={{ data, loading, error }}  */}
                        <Outlet context={{ fromMostViewed, fromAi, loading, error }} />
                    </div>

                </div>
            </section>
        </>
    )
}

export default GenerateTitlesContainer