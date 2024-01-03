import {

    FormControl,
  
    FormField,
    FormItem,
    FormMessage,
  } from "@/components/ui/form"
  import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
  import { langAndTopicType } from "@/utils/formSchemas.zod";
  import { UseFormReturn } from "react-hook-form";
  
  const TopicSelector = ({ form }: {
    form: UseFormReturn<langAndTopicType>
  }) => {
  
  
    return (
      <FormField
  
        control={form.control}
        name="topic"
        render={({ field }) => (
  
          <FormItem className="w-full">
            <FormMessage />
  
            <Select onValueChange={field.onChange} defaultValue={field.value} >
              <FormControl>
                <SelectTrigger className="text-base">
                  <SelectValue placeholder="Select a topic" />
                </SelectTrigger>
              </FormControl>
              <SelectContent className="text-base">
                <SelectItem value="csgo">csgo</SelectItem>
                <SelectItem value="call of duty">call of duty</SelectItem>
                <SelectItem value="valorant">valorant</SelectItem>

              </SelectContent>
            </Select>
          </FormItem>
        )}
      />
  
  
  
  
    )
  }
  
  export default TopicSelector