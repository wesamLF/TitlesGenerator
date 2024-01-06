import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,

    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

const formSchema = z.object({
    email: z
        .string({
            required_error: "Please select an email to display.",
        })
        .email(),
    subject: z.string().min(5, {
        message: "pleas enter a subject.",
    }),
    message: z.string().min(5, {
        message: "pleas enter a message.",
    }),
})

const ContactForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            subject: "",
            message: ""
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        
        console.log(values)
    }


    return (
        <section id="contact" className=" w-full flex justify-center items-center  my-20 ">
            <div className="w-full md:w-1/2 dark bg-background text-foreground border border-black  p-16 shadow-2xl shadow-gray-900">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-center">Contact Form</h1>
                    <p className="text-lg text-muted-foreground">Help us to improve our system, We are open to any suggestions and questions. Feel free to contact us.</p>
                </div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Email" {...field} />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="subject"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Subject</FormLabel>
                                    <FormControl>
                                        <Input placeholder="subject" {...field} />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>message</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="message"
                                            className="resize-none"
                                            {...field}
                                        />                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit">Submit</Button>
                    </form>
                </Form>
            </div>
        </section>
    )
}

export default ContactForm