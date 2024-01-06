
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Copy } from "lucide-react"
import { FilterYouTubeEmbedURL } from "../../../../utils/FilterYouTubeEmbedURL"
import { mostViewedTitlesType } from "../generateTitlesMostViewedSection/GenerateTitlesMostViewed";
import { YTurlRedirect } from "@/utils/YTurlRedirect";
import { toast } from "@/components/ui/use-toast";

export const FromMostViewedTitlesItem = ({ item }: {
    item: mostViewedTitlesType
}) => {


    const handleCopy = () => {
        navigator.clipboard.writeText(item.generatedTitle)
        toast({
            className: "bg-green-500 text-white",
            description: "Copied to Clipboard",
        })
        
    }

    return (
        <div className="flex justify-between items-center">
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="text-lg">{item.generatedTitle}</AccordionTrigger>
                    <AccordionContent >
                        <h3 className=" text-base underline font-semibold mt-4">this title is generated based on this video:</h3>
                        <div className="flex flex-col md:flex-row p-2 gap-5 bg-stone-200 rounded-sm">
                            <iframe className="rounded" width="250" height="200"
                                loading="eager"
                                allowFullScreen
                                src={FilterYouTubeEmbedURL(item.videoLink)}>
                            </iframe>
                            {item.videoLink}
                            <div className="w-full text-lg">
                                <h4
                                    className=" hover:text-gray-600 cursor-pointer"
                                    onClick={() => YTurlRedirect(item.videoLink)}>{item.title}</h4>
                                <span
                                    className="text-blue-500  hover:text-black cursor-pointer"
                                    onClick={() => YTurlRedirect(item.channleLink)}>{item.channleName}</span>
                                <div className="">
                                    views: <span className=" underline me-3">{item.views}</span>
                                </div>
                            </div>
                        </div>

                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <button className="mx-5 " onClick={handleCopy}>
                
                    <Copy className=" h-4 w-4 shrink-0 transition-transform duration-200" />
            </button>
        </div>)
}
