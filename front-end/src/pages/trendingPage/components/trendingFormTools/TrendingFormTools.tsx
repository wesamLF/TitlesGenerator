
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

import GenreSelector from "./GenreSelector"
import LangSelector from "./LangSelector"
import { Form } from "@/components/ui/form"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const FormSchema = z.object({
  lang: z.enum(["english", "arabic"], {
    required_error: "You need to select a language.",
  }),
  genre: z.enum(["gaming" , "movies" , "now" , "music"], {
    required_error: "You need to select a genre.",
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
console.log("fdata", data)
    if (clickedBtn === "genres") {
      fetchData(`http://localhost:5000/trending/${data.genre}/genres`, "genres", data.genre)
      navigate(`./${clickedBtn}`)

    } else if (clickedBtn === "table") {
      fetchData(`http://localhost:5000/trending/${data.genre}`,"table", data.genre)
      navigate(`./${clickedBtn}`)
    }

  }



  return (
    <div className='border border-solid border-[gray]  shadow-md shadow-gray-500 bg-white mb-3'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          <div className="flex flex-col md:flex-row items-center md:items-end justify-center md:justify-between w-full p-6 gap-5">
            <div className="  flex justify-center items-center w-full md:w-1/4 ">
              <LangSelector form={form as any} />
            </div>
            <div className=" flex justify-center items-center w-full md:w-1/4  ">
              <GenreSelector form={form} />
            </div>

            <div className=" w-full md:w-1/2 px-8 flex justify-center flex-row gap-4">
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


