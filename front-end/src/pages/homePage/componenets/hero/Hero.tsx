import "./hero.css"
import MainBtn from "@/components/custom-comp/MainBtn"



const Hero = () => {
    return (
        <section className=" custom-hero-bg my-16">
            <div className="bg-[#0a0a0ad2] flex justify-center items-center p-16">
                <div className=" w-1/2 text-2xl">
                    <h1 className=" text-white py-10  border-l-4 border-[#dc2626] pl-6 italic font-bold ">
                        "After all," he said, "everyone enjoys a good joke, so it's only fair that
                        they should pay for the privilege." all," he said, "everyone enjoys a good joke, so it's only fair that
                        they should pay for the privilege."
                    </h1>
                    <div className="mt-5 flex gap-5 " >
                        <MainBtn name="Generate Titles" to="generate"/>
                        <MainBtn name="Trending Videos" to="trending"/>
                    </div>
                </div>
                <div className="w-1/2">
                    <img src="./images/svgs/undraw_online_stats_0g94.svg" alt="hero svg" />
                </div>
            </div>
        </section>
    )
}

export default Hero