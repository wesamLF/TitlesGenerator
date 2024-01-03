import LoadingSpinner from "@/utils/LoadingSpinner";
import { VideoData, columns } from "./columns"
import { DataTable } from "./data-table"
import { useOutletContext } from "react-router-dom";
import ErrorMessage from "@/utils/ErrorMessage";


type videosType = {
  trending: VideoData[] | []
}
export default function TrendingTable() {
  const { trendingTable, loading, error }: { trendingTable: videosType, loading: boolean, error: boolean } = useOutletContext()
  if (error) return <ErrorMessage />
  if (loading) return <div className=" my-28"><LoadingSpinner /></div>
  return (
    <>
      <DataTable columns={columns} data={trendingTable.trending || []} />
    </>


  )
}

