"use client";

import React, { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { getAPI, postAPI } from "@/lib/API";
import { Label } from "@/components/ui/label";
import { storage } from "../../../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
    fullName: z.string(),
    username: z.string(),
    bio: z.string(),
    dateOfBirth: z.string(),
});

const SignUpForm = () => {
    const router = useRouter();
    const [imageToUpload, setImageToUpload] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState(
        "https://innovating.capital/wp-content/uploads/2021/05/placeholder-image-dark.jpg"
    );

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: { fullName: "hi" },
    });

    useEffect(() => {
        getAPI("/user/profile").then((response) => {
            console.log(response);
            setImagePreview(response.user.avatar);
            form.setValue("fullName", response.user.fullName);
            form.setValue("username", response.user.userName);
            form.setValue("bio", response.user.bio);
            form.setValue("dateOfBirth", response.user.dateOfBirth);
        });
    }, []);

    async function onSubmit(values: z.infer<typeof formSchema>) {
        const imageRef = ref(storage, `image/${v4()}`);
        let imageUrl;

        if (imageToUpload) {
            const snapshot = await uploadBytes(imageRef, imageToUpload);
            imageUrl = await getDownloadURL(snapshot.ref);
            console.log(imageUrl);
        } else {
            if (!imagePreview) {
                toast.error("An error occurred");
                return;
            }
            imageUrl = imagePreview;
        }

        const postData = {
            fullName: values.fullName,
            username: values.username,
            bio: values.bio,
            dateOfBirth: values.dateOfBirth,
            avatar: imageUrl,
        };

        console.log(postData);

        const response = await postAPI("/user/setup-user", postData, {
            showAlerts: true,
        });

        if (response?.success) {
            toast.success(
                response?.data?.message || "Profile setup successful"
            );
            router.push("/profile");
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="picture">Picture</Label>
                    <img
                        className="object-cover w-52 aspect-square rounded-full mb-2 border border-input mx-auto"
                        src={imagePreview}
                        alt=""
                    />
                    <Input
                        onChange={(e) => {
                            if (e.target.files) {
                                setImageToUpload(e.target.files[0]);
                                setImagePreview(
                                    URL.createObjectURL(e.target.files[0])
                                );
                            }
                        }}
                        id="picture"
                        type="file"
                    />
                </div>
                <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="bio"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Bio</FormLabel>
                            <FormControl>
                                <Textarea {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="dateOfBirth"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Date of Birth</FormLabel>
                            <FormControl>
                                <Input type="date" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button className="w-full" type="submit">
                    Done
                </Button>
            </form>
        </Form>
    );
};

export default SignUpForm;
