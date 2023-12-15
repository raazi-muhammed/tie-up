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
import SignUpForm from "./components/SignUpForm";

const SignUp = () => {
    return (
        <div className="bg-background min-h-screen grid place-content-center">
            <Container>
                <Card className="min-w-[400px] p-6 pt-8">
                    <CardHeader>
                        <CardTitle>Sign Up</CardTitle>
                        <CardDescription>Create your account</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <SignUpForm />
                    </CardContent>
                    <CardFooter className="flex flex-col text-center gap-1">
                        <Link className="hover:underline" href="/login">
                            Login
                        </Link>
                    </CardFooter>
                </Card>
            </Container>
        </div>
    );
};

export default SignUp;
