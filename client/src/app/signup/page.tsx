"use client";

import Container from "@/components/ui/container";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { postAPI } from "@/lib/API";

const formSchema = z.object({
    email: z
        .string()
        .min(1, { message: "This field has to be filled." })
        .email("This is not a valid email."),
    username: z.string().min(4, {
        message: "Username must be at least 4 characters.",
    }),
    password: z.string().min(6, {
        message: "Username must be at least 6 characters.",
    }),
});

const SignUp = () => {
    const router = useRouter();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            password: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        const response = await postAPI("/user/sign-up", values);
        if (response?.success) {
            toast.success("Account created");
            router.push("/login");
        }
    }

    return (
        <div className="bg-background min-h-screen grid place-content-center">
            <Container>
                <section className="bg-primary-foreground p-6 rounded min-w-[25em]">
                    <p className="text-2xl font-bold mb-3">Sign Up</p>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-3"
                        >
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
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
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input type="password" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button className="w-full" type="submit">
                                Submit
                            </Button>
                        </form>
                    </Form>
                    <section className="flex flex-col  text-center text-sm mt-4 gap-1 text-primary ">
                        <Link className="hover:underline" href="/login">
                            Login
                        </Link>
                    </section>
                </section>
            </Container>
        </div>
    );
};

export default SignUp;
