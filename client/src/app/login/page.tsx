import Container from "@/components/ui/container";
import React from "react";
import Link from "next/link";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import LoginForm from "./components/LoginForm";

const Login = () => {
    return (
        <main className="bg-background min-h-screen grid place-content-center">
            <Container>
                <Card className="min-w-[400px]">
                    <CardHeader>
                        <CardTitle>Login</CardTitle>
                        <CardDescription>Login in your account</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <LoginForm />
                    </CardContent>
                    <CardFooter className="flex flex-col text-center gap-1">
                        <Link className="hover:underline" href="/signup">
                            Sign Up
                        </Link>
                        <Link className="hover:underline" href="/">
                            Go Home
                        </Link>
                    </CardFooter>
                </Card>
            </Container>
        </main>
    );
};

export default Login;
