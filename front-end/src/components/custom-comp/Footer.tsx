import { Github, Instagram, Twitter } from "lucide-react"



const Footer = () => {
    return (
        <section className=' py-6  border-t-2 border-dashed border-white dark bg-background text-foreground'>
            <div className="w-full flex justify-center gap-5">
                <Instagram />
                <Twitter />
                <Github />
            </div>
        </section>
    )
}

export default Footer