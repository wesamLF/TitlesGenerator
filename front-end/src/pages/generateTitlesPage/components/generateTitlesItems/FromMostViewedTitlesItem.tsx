
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { CopyCheckIcon, Copy } from "lucide-react"
import { FilterYouTubeEmbedURL } from "../../../../utils/FilterYouTubeEmbedURL"
import { useState } from "react";
import { mostViewedTitlesType } from "../generateTitlesMostViewedSection/GenerateTitlesMostViewed";
import { goTo } from "@/utils/goTo";

export const FromMostViewedTitlesItem = ({ item }: {
    item: mostViewedTitlesType
}) => {
    const [isCopied, setIsCopied] = useState(false)


    const handleCopy = () => {
        navigator.clipboard.writeText(item.generatedTitle)
        //////to-do, toast instead of changing the icons
        setIsCopied(true)
    }

    return (
        <div className="flex justify-between items-center">
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="text-lg">{item.generatedTitle}</AccordionTrigger>
                    <AccordionContent >
                        <h3 className=" text-base underline font-semibold mt-4">this title is generated based on this video:</h3>
                        <div className="flex flex-col md:flex-row p-2 gap-5 bg-stone-200 rounded-sm">
                            <iframe className="rounded" width="250" height="200" src={FilterYouTubeEmbedURL(item.videoLink)}> 
                            </iframe>
                            <div className="w-full text-lg">
                                <h4
                                    className=" hover:text-gray-600 cursor-pointer"
                                    onClick={() => goTo(item.videoLink)}>{item.title}</h4>
                                <span
                                    className="text-blue-500  hover:text-black cursor-pointer"
                                    onClick={() => goTo(item.channleLink)}>{item.channleName}</span>
                                <div className="">
                                    views: <span className=" underline me-3">{item.views}</span>
                                </div>
                            </div>
                        </div>

                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <button className="mx-5 " onClick={handleCopy}>
                {isCopied ? <CopyCheckIcon className=" h-4 w-4 shrink-0 text-green-800 transition-transform duration-200" /> :
                    <Copy className=" h-4 w-4 shrink-0 transition-transform duration-200" />}
            </button>
        </div>)
}
