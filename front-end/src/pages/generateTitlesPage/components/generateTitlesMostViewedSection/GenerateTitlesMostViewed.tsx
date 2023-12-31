import { useOutletContext } from "react-router-dom"
import { FromMostViewedTitlesItem } from "../generateTitlesItems/FromMostViewedTitlesItem"


export type mostViewedTitlesType = {
  title: string;
  generatedTitle: string;
  videoLink: string;
  views: string;
  channleName: number;

}
const GenerateTitlesTrending = () => {
  const { fromMostViewed, loading, error }: { fromMostViewed: mostViewedTitlesType[], loading: boolean, error: boolean } = useOutletContext()
  if (loading) return <h1 className=" text-red-700">loading</h1>
  if (error) return <h1 className=" text-red-700">error</h1>
  return (
    <section className="bg-gray-100 my-8 px-8">

      
      {fromMostViewed.map((item, i) => (
        <FromMostViewedTitlesItem item={item} key={i}/>
      ))}



    </section>
  )
}

export default GenerateTitlesTrending