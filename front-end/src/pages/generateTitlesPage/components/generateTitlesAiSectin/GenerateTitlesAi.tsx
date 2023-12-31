import { useOutletContext } from "react-router-dom"
import { FromAiTitlesItem } from "../generateTitlesItems/FromAiTitlesItem"


// const titles = [{
//   title: "first title ",
//   desc: "this title is good becuase it has a lot of views?! i dont know what to write help! my brain is on fire",
//   relatedVideos: {
//     videoTitle: "let gooo gta 6",
//     img: "https://i.ytimg.com/vi/ayuKfuhhAV4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAz1SoqCrAJ9k7nV8mH-5r6DdOLEA"
//     , channelName: "wesamXDDD",
//     views: 132949,
//     likes: 43324
//   }
// },{
//   title: "second title ",
//   desc: "this title is good becuase it has a lot of views?! i dont know what to write help! my brain is on fire",
//   relatedVideos: {
//     videoTitle: "let gooo gta 6",
//     img: "https://i.ytimg.com/vi/ayuKfuhhAV4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAz1SoqCrAJ9k7nV8mH-5r6DdOLEA"
//     , channelName: "wesamXDDD",
//     views: 132949,
//     likes: 43324
//   }
// },{
//   title: "44 title ",
//   desc: "this title is good becuase it has a lot of views?! i dont know what to write help! my brain is on fire",
//   relatedVideos: {
//     videoTitle: "let gooo gta 6",
//     img: "https://i.ytimg.com/vi/ayuKfuhhAV4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAz1SoqCrAJ9k7nV8mH-5r6DdOLEA"
//     , channelName: "wesamXDDD",
//     views: 132949,
//     likes: 43324
//   }
// },{
//   title: "first title ",
//   desc: "this title is good becuase it has a lot of views?! i dont know what to write help! my brain is on fire",
//   relatedVideos: {
//     videoTitle: "let gooo gta 6",
//     img: "https://i.ytimg.com/vi/ayuKfuhhAV4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAz1SoqCrAJ9k7nV8mH-5r6DdOLEA"
//     , channelName: "wesamXDDD",
//     views: 132949,
//     likes: 43324
//   }
// },{
//   title: "first title ",
//   desc: "this title is good becuase it has a lot of views?! i dont know what to write help! my brain is on fire",
//   relatedVideos: {
//     videoTitle: "let gooo gta 6",
//     img: "https://i.ytimg.com/vi/ayuKfuhhAV4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAz1SoqCrAJ9k7nV8mH-5r6DdOLEA"
//     , channelName: "wesamXDDD",
//     views: 132949,
//     likes: 43324
//   }
// },{
//   title: "first title ",
//   desc: "this title is good becuase it has a lot of views?! i dont know what to write help! my brain is on fire",
//   relatedVideos: {
//     videoTitle: "let gooo gta 6",
//     img: "https://i.ytimg.com/vi/ayuKfuhhAV4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAz1SoqCrAJ9k7nV8mH-5r6DdOLEA"
//     , channelName: "wesamXDDD",
//     views: 132949,
//     likes: 43324
//   }
// },{
//   title: "first title ",
//   desc: "this title is good becuase it has a lot of views?! i dont know what to write help! my brain is on fire",
//   relatedVideos: {
//     videoTitle: "let gooo gta 6",
//     img: "https://i.ytimg.com/vi/ayuKfuhhAV4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAz1SoqCrAJ9k7nV8mH-5r6DdOLEA"
//     , channelName: "wesamXDDD",
//     views: 132949,
//     likes: 43324
//   }
// }]
export type aiTitlesType = {
  title:string,
  description:string
}
const GenerateTitlesAi = () => {
  const { fromAi, loading, error }: { fromAi: aiTitlesType[], loading: boolean, error:boolean } = useOutletContext()
  if (loading) return <h1 className=" text-red-700">loading</h1>
  if (error) return <h1 className=" text-red-700">error</h1>
  return (
    <section className="bg-gray-100 my-8 px-8">


      {fromAi.map((item, i) => (
        <FromAiTitlesItem item={item} key={i}/>
      ))}



    </section>
  )
}

export default GenerateTitlesAi