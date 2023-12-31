
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

import GenreSelector from "../../../../components/custom-comp/toolsSection/GenreSelector"
import LangSelector from "../../../../components/custom-comp/toolsSection/LangSelector"
import { Form } from "@/components/ui/form"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const FormSchema = z.object({
  lang: z.enum(["english", "arabic"], {
    required_error: "You need to select a lang type.",
  }),
  genre: z.enum(["gaming", "vlogs"], {
    required_error: "You need to select a trending genre.",
  }),
})

const TrendingFormTools = ({ fetchData, loading }:
  { fetchData: (u: string , to:string,genres:string) => void, loading: boolean }) => {
  const [clickedBtn, setClickedBtn] = useState<"genres" | "table">()
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {

    },
  })


  function onSubmit(data: z.infer<typeof FormSchema>) {

    if (clickedBtn === "genres") {
      fetchData(`http://localhost:5000/trending/${data.genre}/genres`, "genres", data.genre)
      navigate(`./${clickedBtn}`)

    } else if (clickedBtn === "table") {
      fetchData(`http://localhost:5000/trending/${data.genre}`,"table", data.genre)
      navigate(`./${clickedBtn}`)
    }

  }
  console.log("tr tool render")



  return (
    <div className='border border-solid border-[gray]  rounded-xl shadow-xl bg-white'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          <div className="flex flex-row items-end justify-between w-full p-6 gap-5">
            <div className="  flex justify-center w-1/4 ">
              <LangSelector form={form as any} />
            </div>
            <div className=" flex justify-center flex-col w-1/4 ">
              <GenreSelector form={form} />
            </div>

            <div className=" w-1/2 px-8 flex flex-row gap-4">
              <div className="bg-greden-200 flex justify-center w-full ">
                <Button className="w-full" name="genres" type="submit"
                  disabled={loading}
                  onClick={() => { setClickedBtn("genres") }}>
                  {loading && clickedBtn == "genres" ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : ""} Genres</Button>
              </div>
              <div className="bg-greden-200 flex justify-center w-full ">
                <Button className="w-full" name="table" type="submit"
                  onClick={() => { setClickedBtn("table") }}
                  disabled={loading}>
                  {loading && clickedBtn == "table" ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : ""} Table</Button>
            </div>
          </div>
        </div>

      </form>
    </Form>
    </div >
  )
}

export default TrendingFormTools


