
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { CopyCheckIcon, Copy } from "lucide-react"

import { useState } from "react";
import { aiTitlesType } from "../generateTitlesAiSectin/GenerateTitlesAi";
export const FromAiTitlesItem = ({ item }: {
    item: aiTitlesType}
) => {
    const [isCopied, setIsCopied] = useState(false)


    const handleCopy = () => {
        navigator.clipboard.writeText(item.title)
        //////to-do, toast instead of changing the icons
        setIsCopied(true)
    }

    return (
        <div className="flex justify-between items-center">
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="text-lg">{item.title}</AccordionTrigger>
                    <AccordionContent >
                        <span className=" text-base">{item.description}</span>
                        {/* <div className="flex flex-row py-2 mb-4 bg-stone-200 rounded-sm">
                            <div className=" w-64 mr-8">
                                <img src={item.relatedVideos.img} alt="" className="w-full h-full object-contain rounded-sm" />
                            </div>
                            <div className="w-full text-lg">
                                <h4>{item.relatedVideos.videoTitle}</h4>
                                <span className="text-blue-500 text-base">{item.relatedVideos.channelName}</span>
                                <div className="">
                                    views: <span className=" underline me-3">{item.relatedVideos.views}</span> Likes: <span className="underline">{item.relatedVideos.views}</span>
                                </div>
                            </div>
                        </div> */}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <button className="mx-5 " onClick={handleCopy}>
                {isCopied ? <CopyCheckIcon className=" h-4 w-4 shrink-0 text-green-800 transition-transform duration-200" /> :
                    <Copy className=" h-4 w-4 shrink-0 transition-transform duration-200" />}
            </button>
        </div>)
}
