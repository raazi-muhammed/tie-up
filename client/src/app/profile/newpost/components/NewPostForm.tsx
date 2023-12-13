"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { postAPI } from "@/lib/API";
import toast from "react-hot-toast";
import { Label } from "@/components/ui/label";
import { storage } from "../../../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { useState } from "react";

const formSchema = z.object({
    heading: z.string(),
    description: z.string(),
});

export default function NewPostForm() {
    const [imageToUpload, setImageToUpload] = useState<File | null>(null);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            heading: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        const imageRef = ref(storage, `image/${v4()}`);
        let imageUrl;
        if (imageToUpload) {
            const snapshot = await uploadBytes(imageRef, imageToUpload);
            imageUrl = await getDownloadURL(snapshot.ref);
            console.log(imageUrl);
        } else {
            toast.error("An error occured");
            return;
        }

        const postData = {
            heading: values.heading,
            description: values.heading,
            imageUrl: imageUrl,
        };
        const response = await postAPI("/post/new-post", postData, {
            showAlerts: true,
        });
        toast.success("Posted successfully");
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="picture">Picture</Label>
                    <Input
                        onChange={(e) => {
                            if (e.target.files) {
                                setImageToUpload(e.target.files[0]);
                            }
                        }}
                        id="picture"
                        type="file"
                    />
                </div>
                <FormField
                    control={form.control}
                    name="heading"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Heading</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Textarea {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <section className="flex justify-between">
                    <Button variant="outline">Cancel</Button>
                    <Button type="submit">Submit</Button>
                </section>
            </form>
        </Form>
    );
}
