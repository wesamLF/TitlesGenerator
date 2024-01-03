import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const HowItWorks = () => {
    return (
        <section className='dark bg-background text-foreground flex justify-center items-center flex-col py-10 px-16 my-24'>
            <h1 className=" text-4xl font-bold">How it Works?</h1>
            <div className="w-full flex justify-center items-center flex-col md:flex-row">
                <div className="w-full md:w-1/2 p-10 ">
                        <img src="./images/gifs/gif2.gif" className=" object-contain"></img>
                </div>
                <div className="w-full md:w-1/2 "><Accordion type="single" collapsible className="w-full text-lg">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Is it accessible?</AccordionTrigger>
                        <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Is it styled?</AccordionTrigger>
                        <AccordionContent>
                            Yes. It comes with default styles that matches the other
                            components&apos; aesthetic.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Is it animated?</AccordionTrigger>
                        <AccordionContent>
                            Yes. It&apos;s animated by default, but you can disable it if you
                            prefer.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion></div>
            </div>

        </section >
    )
}

export default HowItWorks