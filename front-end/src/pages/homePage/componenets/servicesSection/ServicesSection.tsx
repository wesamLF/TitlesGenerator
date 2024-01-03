import ServiceCard from "./ServiceCard"

export type serviceType = {
    url:string,
    title: string,
    description: string,
    advantages: string[]
}
export function ServicesSection() {
    const servies: serviceType[] = [{
        url:"/trending",
        title: "Trending",
        description: "now you can see all trending videos in your country....",
        advantages: [
            "easy to use" , "very efficient", "fast!"
        ]
    },
    {
        url:"/generate",
        title: "Generate Titiles",
        description: "now you can see all trending videos in your country....",
        advantages: [
            "easy to use" , "very efficient", "fast!"
        ]
    },{
        url:"/generate",
        title: "Ai Generated Title",
        description: "now you can see all trending videos in your country....",
        advantages: [
            "easy to use" , "very efficient", "fast!"
        ]
    }
    ]

    return (
        <section className="flex flex-col md:flex-row flex-wrap justify-center  gap-5  p-14 md:py-32 md:my-16">
            {servies.map((s,i)=>(
                      <ServiceCard key={i} url={s.url} title={s.title} description={s.description} advantages={[...s.advantages]} />

            ))}
            
        </section>
    )
}


export default ServicesSection