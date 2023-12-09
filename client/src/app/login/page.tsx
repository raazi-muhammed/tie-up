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
    username: z.string().email().min(6, {
        message: "Username must be at least 6 characters.",
    }),
    password: z.string().min(6, {
        message: "Username must be at least 6 characters.",
    }),
});

const Login = () => {
    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            password: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        const response = await postAPI("/user/login", values);
        if (response?.success) {
            toast.success(response?.data?.message || "Login Successful");
            router.push("/");
        }
    }

    return (
        <div className="bg-background min-h-screen grid place-content-center">
            <Container>
                <section className="bg-primary-foreground p-6 rounded min-w-[25em]">
                    <p>Login</p>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-3"
                        >
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
                                            <Input {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit">Submit</Button>
                        </form>
                        <Link href="/signup">Sign Up</Link>
                        <Link href="/">Go Home</Link>
                    </Form>
                </section>
            </Container>
        </div>
    );
};

export default Login;
