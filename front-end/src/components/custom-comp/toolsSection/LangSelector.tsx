import {

    FormControl,

    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { UseFormReturn } from "react-hook-form";
import { langAndGenreType, langAndTobicType } from "utils/formSchemas.zod";


type temp = langAndTobicType | langAndGenreType 
function LangSelector({ form }: {
    form: UseFormReturn<temp>
}) {



    //  LangSelector<T> = ({ form }: {
    //     form: UseFormReturn<T>
    // }) => {


    return (
        <FormField

            control={form.control}
            name="lang"
            render={({ field }) => (
                <FormItem className="w-full">
                    <FormMessage />

                    <Select onValueChange={field.onChange} defaultValue={field.value} >
                        <FormControl>
                            <SelectTrigger className="text-base">
                                <SelectValue placeholder="Select the language" />
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent className="text-base">
                            <SelectItem value="arabic">arabic</SelectItem>
                            <SelectItem value="english">english</SelectItem>

                        </SelectContent>
                    </Select>
                </FormItem>
            )}
        />




    )
}

export default LangSelector