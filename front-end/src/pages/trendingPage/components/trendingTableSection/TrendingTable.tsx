import { VideoData, columns } from "./columns"
import { DataTable } from "./data-table"
import { useOutletContext } from "react-router-dom";


type videosType = {
  trending: VideoData[] | []
}
export default function TrendingTable() {
  const { trendingTable, loading, error }: { trendingTable: videosType, loading: boolean, error:boolean } = useOutletContext()
  if (loading) return <h1 className=" text-red-700">loading</h1>
  if (error) return <h1 className=" text-red-700">error</h1>

  return (
    <>
      {trendingTable?.trending?.length == 0 ? <div className="flex justify-center items-center p-32">
        <h1>Welcome try Out Our Tool</h1>
        <p>slecet a genre the hit the button</p>
      </div>
        : <DataTable columns={columns} data={trendingTable.trending || []} />
      }
    </>


  )
}

