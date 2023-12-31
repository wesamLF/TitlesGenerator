
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import { Form } from "@/components/ui/form"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
// import {generateTitlesFormSchema} from "../../../../../utils/formSchemas.zod"
import TobicSelector from "@/components/custom-comp/toolsSection/TobicSelector"
import LangSelector from "@/components/custom-comp/toolsSection/LangSelector"


const generateTitlesFormSchema = z.object({
  lang: z.enum(["english", "arabic"], {
    required_error: "You need to select a lang type.",
  }),
  topic: z.enum(["valorant", "csgo", "call of duty"], {
    required_error: "You need to select a topic.",
  }),
})

const GenerateTitlesFormTools = ({ fetchData, loading }:
  { fetchData: (url: string, to: string, topic: string) => void, loading: boolean }) => {
  const [clickedBtn, setClickedBtn] = useState<"mostviewed" | "ai">()
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof generateTitlesFormSchema>>({
    resolver: zodResolver(generateTitlesFormSchema),
    defaultValues: {

    },
  })


  function onSubmit(data: z.infer<typeof generateTitlesFormSchema>) {

    if (clickedBtn === "ai") {
      fetchData(`http://localhost:5000/generate/titles/ai/${data.topic}`, "ai", data.topic)
      navigate(`./${clickedBtn}`)

    } else if (clickedBtn === "mostviewed") {
      fetchData(`http://localhost:5000/generate/titles/mostviewed/${data.topic}`, "mostviewed", data.topic)

      navigate(`./${clickedBtn}`)
    }

  }
  console.log("gen form render")



  return (
    <div className='border border-solid border-[gray]  rounded-xl shadow-xl bg-white'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          <div className="flex flex-row items-end justify-between w-full p-6 gap-5">
            <div className="  flex justify-center w-1/4 ">
              <LangSelector form={form as any} />
            </div>
            <div className="  flex justify-center w-1/4 ">
              <TobicSelector form={form} />
            </div>


            <div className=" w-1/2 px-8 flex flex-row gap-4">
              <div className="bg-greden-200 flex justify-center w-full ">
                <Button className="w-full" name="mostviewed" type="submit"
                  disabled={loading}
                  onClick={() => { setClickedBtn("mostviewed") }}>
                  {loading && clickedBtn == "mostviewed" ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : ""} Mostviewed</Button>
              </div>
              <div className="bg-greden-200 flex justify-center w-full ">
                <Button className="w-full" name="AI" type="submit"
                  onClick={() => { setClickedBtn("ai") }}
                  disabled={loading}>
                  {loading && clickedBtn == "ai" ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : ""} AI</Button>
              </div>
            </div>
          </div>

        </form>
      </Form>
    </div >
  )
}

export default GenerateTitlesFormTools


