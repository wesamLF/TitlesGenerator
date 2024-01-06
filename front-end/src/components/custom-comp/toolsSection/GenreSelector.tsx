import {

  FormControl,

  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { UseFormReturn } from "react-hook-form";

const GenreSelector = ({ form }: {
  form: UseFormReturn<{
    genre: "gaming" | "music";
  }>
}) => {


  return (
    <FormField

      control={form.control}
      name="genre"
      render={({ field }) => (

        <FormItem className="w-full">
          <FormMessage />

          <Select onValueChange={field.onChange} defaultValue={field.value} >
            <FormControl>
              <SelectTrigger className="text-base">
                <SelectValue placeholder="Select a Genre" />
              </SelectTrigger>
            </FormControl>
            <SelectContent className="text-base">
              <SelectItem value="gaming">gaming</SelectItem>
              <SelectItem value="music">music</SelectItem>

            </SelectContent>
          </Select>
        </FormItem>
      )}
    />




  )
}

export default GenreSelector