import ServiceCard from "./ServiceCard"

export type serviceType = {
    title: string,
    description: string,
    advantages: string[]
}
export function ServicesSection() {
    const servies: serviceType[] = [{
        title: "Trending",
        description: "now you can see all trending videos in your country....",
        advantages: [
            "easy to use" , "very efficient", "fast!"
        ]
    },
    {
        title: "Generate Titiles",
        description: "now you can see all trending videos in your country....",
        advantages: [
            "easy to use" , "very efficient", "fast!"
        ]
    },{
        title: "Ai Generated Title",
        description: "now you can see all trending videos in your country....",
        advantages: [
            "easy to use" , "very efficient", "fast!"
        ]
    }
    ]

    return (
        <section className="flex flex-row justify-center  gap-5 p-28 my-16">
            {servies.map((s,i)=>(
                      <ServiceCard key={i} title={s.title} description={s.description} advantages={[...s.advantages]} />

            ))}
            
        </section>
    )
}


export default ServicesSection